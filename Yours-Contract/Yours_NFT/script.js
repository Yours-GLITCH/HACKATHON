const { ethers } = require("ethers");
require("dotenv").config();
const fs = require("fs");

/*  const provider = new ethers.providers.getDefaultProvider(
     "http://127.0.0.1:8545/"
 ); */
 const provider = new ethers.providers.getDefaultProvider(
     `${process.env.GO_RPC}`
 );

//const provider = new ethers.providers.getDefaultProvider(
//    `${process.env.MUMBAI_API_URL}`
//);

/* const provider = new ethers.providers.getDefaultProvider(
    `${process.env.BAOBAB_TESTNET_API_URL}`
) */

// const socketProvider = new ethers.providers.WebSocketProvider(
//   `${process.env.MAINNET_RPC_SOCKET}`
// );
// socketProvider.on("block", () => {
//   main();
// });

//const private = process.env.LOCAL_SECRET;
const private = process.env.WALLET_SECRET;
//const private = process.env.TESTNET_PRIVATE_KEY; //klaytn wallet
const walletObj = new ethers.Wallet(private);
const wallet = walletObj.connect(provider);

const deployed = require("./deployed-address.json");
const factoryAdd = deployed.YoursFactory;
const factoryData = require("./artifacts/contracts/YoursFactory.sol/YoursFactory.json");
const benefitData = require("./artifacts/contracts/YoursBenefitNFT.sol/YoursBenefitNFT.json");
const contract = new ethers.Contract(factoryAdd, factoryData.abi, provider);

const IntegratedAdd = deployed.YoursIntegratedNFT;
const IntegratedData = require("./artifacts/contracts/YoursIntegratedNFT.sol/YoursIntegratedNFT.json");
const IntegratedContract = new ethers.Contract(IntegratedAdd, IntegratedData.abi, provider);

const main = async () => {
    console.log(await provider.getSigner().getAddress())
    // const beforeBalance = await wallet.getBalance();

    /*const owner = await contract.owner();
    console.log("Owner :", owner);

    let tx = await contract
        .connect(wallet) 
        .setIntegratedNFT(IntegratedAdd);

    await tx.wait();

    const nftaddresses = [];
    var deployedNFT;
    var mintIDs = [];
    for(let i = 0; i < 3; i++) {
        deployedNFT = await deployNFT("", "", "");
        nftaddresses.push(deployedNFT);
        console.log(i + 1, "th nft address: ", deployedNFT);

        const nftContract = new ethers.Contract(
            deployedNFT,
            benefitData.abi,
            provider
        );
        const mintID = await mintNFT(nftContract, wallet.address);
        mintIDs.push(mintID.toNumber());
        console.log("Minted ID :", mintID.toNumber());
    }
    console.log("Address ", wallet.address);
    console.log("nftaddress ", nftaddresses);
    console.log("mintIDs ", mintIDs);
    console.log()
    
    const integratedId = await mintIntegratedNFT(wallet.address, "uri", nftaddresses, mintIDs);

    await getAllIntegratedInfo(integratedId);

    
    const ttx = await contract.connect(wallet).burnIntegratedNFT(wallet.address, integratedId);
    const rrc = await ttx.wait();

    await getAllIntegratedInfo(integratedId);*/

    


    /*const info = await IntegratedContract.integratedNFT(integratedId, 0);
    console.log( " info of integratedNFT: ", info);*/


   /*  const deployedNFT = await deployNFT("", "", "");
    console.log("NFT address :", deployedNFT);

    

    const nftContract = new ethers.Contract(
        deployedNFT,
        benefitData.abi,
        provider
    ); */


    
    /* console.log("before: ", await nftContract.benefitURI());
    await setBenefitURI(nftContract, "12345");
    console.log("after: ", await nftContract.benefitURI()) */


    /* const mintID = await mintNFT(nftContract, wallet.address);
    console.log("Minted ID :", mintID.toNumber());
    

    const metaURI = await getMetadata(nftContract);
    console.log("Token URI :", metaURI);

    const beforeOwner = await checkOwner(nftContract, mintID);

    await transferNFT(nftContract, mintID, wallet.address, "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65");

    const afterOwner = await checkOwner(nftContract, mintID);

    console.log("before:", beforeOwner);
    console.log("after:", afterOwner); */
    // const afterBalance = await wallet.getBalance();
    // const usedGas = ethers.utils.formatEther(`${beforeBalance - afterBalance}`);
    // console.log("Used :", usedGas);
};

const deployNFT = async () => {
    let tx;
    try {
        const gas = await contract
            .connect(wallet)
            .estimateGas.deployNFT(
                "Name",
                "Symbol",
                "MetadataURI",
                "BenefitURI",
                [2001, 3021]
            );
        console.log("Gas :", gas);
        tx = await contract
            .connect(wallet)
            .deployNFT(
                "Name",
                "Symbol",
                "MetadataURI",
                "BenefitURI",
                [2001, 3021],
                {
                    gasLimit: gas,
                }
            );
    } catch (error) {
        console.log(error);
        console.log("전체 함수 중지");
    }

    const clone = await getDeployedAddress(tx);

    return clone;
};

const getDeployedAddress = async (tx) => {
    try {
        const rc = await tx.wait();
        const event = rc.events.find((event) => event.event === "DeployNFT");
        const [clone, owner] = event.args;
        return clone;
    } catch (error) {
        console.log(error);
    }
};

const mintNFT = async (nft, address) => {
    const tx = await nft.connect(wallet).mint(address);
    /*console.log("-------------tx------------------");
    console.log(tx);*/
    const rc = await tx.wait();
    /*console.log("--------------rc---------------");
    console.log(rc);*/
    const event = await rc.events.find((event) => event.event === "Mint");
    const id = event.args[0];
    /*const block = await event.getBlock();
    console.log("block is", block.timestamp);*/ // check minting block timestamp
    return id;
};

const transferNFT = async (nft, id, from, to) => {
    const tx = await nft.connect(wallet).transferFrom(from, to, id);
    /*console.log("-------------tx------------------");
    console.log(tx);*/
    const rc = await tx.wait();
    console.log(rc)
    /*console.log("--------------rc---------------");
    console.log(rc);*/
    //const event = rc.events.find((event) => event.event === "Mint");
    //const id = event.args[0];
    /*const block = await event.getBlock();
    console.log("block is", block.timestamp);*/ // check minting block timestamp
};

const checkOwner = async (nft, id) => {
    return await nft.connect(wallet).ownerOf(id);
}

const getMetadata = async (nft) => {
    return await nft.tokenURI(0);
};

const mintIntegratedNFT = async (to, uri, nftaddresses, Ids) => {
    let tx;
    try {
        tx = await contract
            .connect(wallet)
            .integrateNFTs(
                to,
                uri,
                nftaddresses,
                Ids
        )
    } catch (error) {
        console.log(error);
        console.log("전체 함수 중지");
    }

    const rc = await tx.wait();
    const event = rc.events.find((event) => event.event === "MintIntegratedNFT");
    const id = event.args[0];

    return id;
}

const getIntegratedInfo = async (id, count) => {
    const info = await IntegratedContract.integratedNFT(id, count);
    const Info = {
        "nftAddress": info.nftAddress,
        "id": info.id.toNumber()
    }
    return Info;
}

const getLengthOfIntegratedNFT = async (id) => {
    const len = await IntegratedContract.getLength(id);
    return len.toNumber();
}

const getAllIntegratedInfo = async (id) => {
    const len = await getLengthOfIntegratedNFT(id);
    console.log("lenght ", len);
    var info
    for (let i = 0; i < len; i++) {
        info = await getIntegratedInfo(id, i);
        console.log("NFT Address: ", info.nftAddress);
        console.log("ID: ", info.id);
        console.log("-----------------------------------");
    }
}

const setBenefitURI = async (nft, uri) => {
    const tx = await nft.connect(wallet).setBenefitsURI(uri);
    const rc = await tx.wait();
}




const getMyNFTs = async () => {};

const getMethods = (data) => {
    data.abi.map((value) => {
        let methodData = value.name + "(";
        value.inputs.map((value1) => {
            methodData += "(" + value1.type + " " + value1.name + ")";
        });
        methodData += ");";
        console.log(methodData);
    });
};

main();
