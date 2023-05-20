import { ethers } from 'ethers';
import config from '../../config';
import deployed from './aurora-deployed-address.json';
import factoryData from '../Ethereum/YoursFactory.json';
import { getDeployedAddress } from '../common/commonContract';
import { AAUtils } from '../../modules/AAUtils';
import { UserOperation } from '../../modules/AAtools/UserOperation';
import { getUserOpHash } from '../../modules/AAtools/UserOp';

const factoryAddress = deployed.YoursFactory;
const auroraProvider = new ethers.providers.JsonRpcProvider(config.auroraRPC);
const walletObj = new ethers.Wallet(config.WalletSecretKey);
const wallet = walletObj.connect(auroraProvider);
const contract = new ethers.Contract(
  factoryAddress,
  factoryData.abi,
  auroraProvider,
);
const aurorasSigner = walletObj.connect(auroraProvider);

const AA = new AAUtils(
  aurorasSigner,
  config.auroraEntryPointAddress,
  config.auroraPaymasterAddress,
  config.auroraFactoryAddress,
);

const deployAuroraNFT = async (
  name: string | null,
  uri: string | null,
  benefitUri: string | null,
) => {
  try {
    let transaction;
    const gas = await contract
      .connect(wallet)
      .estimateGas.deployNFT(name, '', uri, benefitUri, []);
    transaction = await contract
      .connect(wallet)
      .deployNFT(name, '', uri, benefitUri, [], {
        gasLimit: gas,
      });
    const deployedInfo = await getDeployedAddress(transaction);
    while (typeof deployedInfo.contractAddress == 'string') {
      const deployedInfo = await getDeployedAddress(transaction);
      return deployedInfo;
    }

    const data = {
      contractAddress: deployedInfo.contractAddress,
      transactionHash: deployedInfo.transactionHash,
      date: deployedInfo.date,
    };
    return data;
  } catch (error) {
    throw error;
  }
};

const mintAuroraNFT = async (nft: ethers.Contract, address: string) => {
  const transaction = await nft.connect(wallet).mint(address);
  const rc = await transaction.wait();
  const event = rc.events.find((event: any) => event.event === 'Mint');
  const mintId = event.args[0].toNumber();
  const transactionHash = event.transactionHash;
  const block = await event.getBlock(); // check minting block timestamp
  const date = new Date(block.timestamp * 1000);

  const data = {
    mintId: mintId,
    transactionHash: transactionHash,
    date: date,
  };

  return data;
};

const setAuroraBenefitURI = async (nft: ethers.Contract, uri: string) => {
  const transaction = await nft.connect(wallet).setBenefitsURI(uri);
  const rc = await transaction.wait();
  const event = rc.events.find(
    (event: any) => event.event === 'ChangeBenefitsURI',
  );
  const transactionHash = event.transactionHash;
  const block = await event.getBlock(); // check minting block timestamp
  const date = new Date(block.timestamp * 1000);

  const data = {
    transactionHash: transactionHash,
    date: date,
  };

  return data;
};

const transferAuroraNFT = async (
  nft: ethers.Contract,
  id: number,
  from: string,
  to: string,
) => {
  const transaction = await nft.connect(wallet).transferFrom(from, to, id);
  const rc = await transaction.wait();
  const data = {
    transactionHash: rc.transactionHash,
  };

  return data;
};

const createAuroraAAaccountOp = async (ownerAddress: string) => {
  try {
    if ((await AA.paymasterDeposit()) == '0') {
      await AA.depositToPaymaster('0.01');
    }

    const createOp = await AA.createAccountOp(ownerAddress, 10);
    const chainId = await auroraProvider!
      .getNetwork()
      .then((net) => net.chainId);
    const message = getUserOpHash(
      createOp,
      config.auroraEntryPointAddress,
      chainId,
    );
    const data = {
      createOp: createOp,
      message: message,
    };
    return data;
  } catch (error) {
    throw error;
  }
};

const handleAuroraCreateWalletOp = async (createOpWithSign: UserOperation) => {
  try {
    await AA.mintToken(createOpWithSign.sender, '1000');
    const beneficiaryAddress = config.walletAddress;
    const rcpt = await AA.handleOp(createOpWithSign, beneficiaryAddress);
    const data = {
      rcpt: rcpt,
    };
    return data;
  } catch (error) {
    throw error;
  }
};

const createAuroraTransferOp = async (
  nft: ethers.Contract,
  id: number,
  from: string,
  to: string,
) => {
  try {
    const transfer = await nft.populateTransaction.transferFrom(from, to, id);
    const calldata = await AA.generateExecutionCalldata(
      aurorasSigner,
      from,
      nft.address,
      transfer.data!,
    );
    const transferOp: UserOperation = await AA.createOp({
      sender: from,
      callData: calldata,
      paymasterAndData: AA.paymaster.address,
      verificationGasLimit: 1e6,
      callGasLimit: 1e6,
    });
    const chainId = await auroraProvider!
      .getNetwork()
      .then((net) => net.chainId);
    const message = getUserOpHash(
      transferOp,
      config.auroraEntryPointAddress,
      chainId,
    );
    const data = {
      transferOp: transferOp,
      message: message,
    };
    return data;
  } catch (error) {
    throw error;
  }
};
const handleAuroraTransferOp = async (createOpWithSign: UserOperation) => {
  try {
    const beneficiaryAddress = config.walletAddress;
    const rcpt = await AA.handleOp(createOpWithSign, beneficiaryAddress);
    const data = {
      transactionHash: rcpt.hash,
    };
    return data;
  } catch (error) {
    throw error;
  }
};

export {
  deployAuroraNFT,
  mintAuroraNFT,
  auroraProvider,
  setAuroraBenefitURI,
  transferAuroraNFT,
  createAuroraAAaccountOp,
  handleAuroraCreateWalletOp,
  createAuroraTransferOp,
  handleAuroraTransferOp,
};
