/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BrokenBLSAccount,
  BrokenBLSAccountInterface,
} from "../../../../contracts/test/BrokenBlsAccount.sol/BrokenBLSAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[4]",
        name: "oldPublicKey",
        type: "uint256[4]",
      },
      {
        indexed: false,
        internalType: "uint256[4]",
        name: "newPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "PublicKeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlsPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "",
        type: "uint256[4]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e0604052306080523480156200001557600080fd5b50604051620026033803806200260383398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051612408620001fb6000396000818161027d015261093e0152600081816103d1015281816109b701528181610a5e01528181610e40015281816111e20152818161153e01526117e001526000818161073a015281816107ea01528181610b2201528181610bd20152610d1b01526124086000f3fe60806040526004361061016d5760003560e01c806352d1902d116100cb578063bc197c811161007f578063e02afbae11610059578063e02afbae14610492578063ee472f36146104b4578063f23a6e61146104d457600080fd5b8063bc197c8114610415578063c399ec881461045d578063c4d66de81461047257600080fd5b8063affed0e0116100b0578063affed0e01461039f578063b0d691fe146103c2578063b61d27f6146103f557600080fd5b806352d1902d1461034d5780638da5cb5b1461036257600080fd5b80633659cfe6116101225780634a58db19116101075780634a58db19146103125780634d44560d1461031a5780634f1ef2861461033a57600080fd5b80633659cfe6146102c45780633a871cdd146102e457600080fd5b8063150b7a0211610153578063150b7a02146101d557806318dfb3c71461024b578063245a7bfc1461026b57600080fd5b806223de291461017957806301ffc9a7146101a057600080fd5b3661017457005b600080fd5b34801561018557600080fd5b5061019e610194366004611bc2565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb366004611c73565b61051a565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b5061021a6101f0366004611cb5565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101cc565b34801561025757600080fd5b5061019e610266366004611d6d565b6105ff565b34801561027757600080fd5b5061029f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cc565b3480156102d057600080fd5b5061019e6102df366004611dd9565b610723565b3480156102f057600080fd5b506103046102ff366004611df6565b610928565b6040519081526020016101cc565b61019e6109b5565b34801561032657600080fd5b5061019e610335366004611e4a565b610a54565b61019e610348366004611ef4565b610b0b565b34801561035957600080fd5b50610304610d01565b34801561036e57600080fd5b5060015461029f906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103ab57600080fd5b506001546bffffffffffffffffffffffff16610304565b3480156103ce57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061029f565b34801561040157600080fd5b5061019e610410366004611fba565b610ded565b34801561042157600080fd5b5061021a61043036600461200a565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561046957600080fd5b50610304610e3c565b34801561047e57600080fd5b5061019e61048d366004611dd9565b610ef4565b34801561049e57600080fd5b506104a7611087565b6040516101cc91906120a8565b3480156104c057600080fd5b5061019e6104cf3660046120d9565b61109c565b3480156104e057600080fd5b5061021a6104ef366004612157565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105ad57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806105f957507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6106076111ca565b828114610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561071c5761070a858583818110610695576106956121d3565b90506020020160208101906106aa9190611dd9565b60008585858181106106be576106be6121d3565b90506020028101906106d09190612202565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061129d92505050565b8061071481612296565b915050610678565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036107e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161066c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661085d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610900576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161066c565b6109098161131a565b6040805160008082526020820190925261092591839190611322565b50565b6000610932611526565b604080516060810182527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16808252600060208301819052919092015290506109936040850185612202565b90506000036109a5576109a5846115c5565b6109ae8261168e565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610a4057600080fd5b505af115801561071c573d6000803e3d6000fd5b610a5c6116f9565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610aef57600080fd5b505af1158015610b03573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610bd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161066c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c457f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161066c565b610cf18261131a565b610cfd82826001611322565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610dc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161066c565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610df56111ca565b610e36848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061129d92505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610ecb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eef91906122ce565b905090565b600054610100900460ff1615808015610f145750600054600160ff909116105b80610f2e5750303b158015610f2e575060005460ff166001145b610fba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161066c565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561101857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61102182611794565b8015610cfd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b61108f611b39565b611097611b39565b919050565b600054610100900460ff16158080156110bc5750600054600160ff909116105b806110d65750303b1580156110d6575060005460ff166001145b611162576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161066c565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156111c057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6110216000611794565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061123557506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b61129b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161066c565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516112c69190612313565b60006040518083038185875af1925050503d8060008114611303576040519150601f19603f3d011682016040523d82523d6000602084013e611308565b606091505b50915091508161071c57805160208201fd5b6109256116f9565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561135a576113558361182c565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156113df575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526113dc918101906122ce565b60015b61146b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161066c565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461151a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161066c565b50611355838383611936565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461129b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161066c565b600180546020830135916bffffffffffffffffffffffff9091169060006115eb8361232f565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e636500000000000000000000604482015260640161066c565b80156109255760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461071c576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061172e57503330145b61129b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161066c565b600180546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6118d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161066c565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61193f8361195b565b60008251118061194c5750805b1561135557610e3683836119a8565b6119648161182c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606109ae83836040518060600160405280602781526020016123ac6027913960606000808573ffffffffffffffffffffffffffffffffffffffff16856040516119f29190612313565b600060405180830381855af49150503d8060008114611a2d576040519150601f19603f3d011682016040523d82523d6000602084013e611a32565b606091505b5091509150611a4386838387611a4d565b9695505050505050565b60608315611ae3578251600003611adc5773ffffffffffffffffffffffffffffffffffffffff85163b611adc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161066c565b5081611aed565b611aed8383611af5565b949350505050565b815115611b055781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c919061235a565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461092557600080fd5b60008083601f840112611b8b57600080fd5b50813567ffffffffffffffff811115611ba357600080fd5b602083019150836020828501011115611bbb57600080fd5b9250929050565b60008060008060008060008060c0898b031215611bde57600080fd5b8835611be981611b57565b97506020890135611bf981611b57565b96506040890135611c0981611b57565b955060608901359450608089013567ffffffffffffffff80821115611c2d57600080fd5b611c398c838d01611b79565b909650945060a08b0135915080821115611c5257600080fd5b50611c5f8b828c01611b79565b999c989b5096995094979396929594505050565b600060208284031215611c8557600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109ae57600080fd5b600080600080600060808688031215611ccd57600080fd5b8535611cd881611b57565b94506020860135611ce881611b57565b935060408601359250606086013567ffffffffffffffff811115611d0b57600080fd5b611d1788828901611b79565b969995985093965092949392505050565b60008083601f840112611d3a57600080fd5b50813567ffffffffffffffff811115611d5257600080fd5b6020830191508360208260051b8501011115611bbb57600080fd5b60008060008060408587031215611d8357600080fd5b843567ffffffffffffffff80821115611d9b57600080fd5b611da788838901611d28565b90965094506020870135915080821115611dc057600080fd5b50611dcd87828801611d28565b95989497509550505050565b600060208284031215611deb57600080fd5b81356109ae81611b57565b600080600060608486031215611e0b57600080fd5b833567ffffffffffffffff811115611e2257600080fd5b84016101608187031215611e3557600080fd5b95602085013595506040909401359392505050565b60008060408385031215611e5d57600080fd5b8235611e6881611b57565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611eec57611eec611e76565b604052919050565b60008060408385031215611f0757600080fd5b8235611f1281611b57565b915060208381013567ffffffffffffffff80821115611f3057600080fd5b818601915086601f830112611f4457600080fd5b813581811115611f5657611f56611e76565b611f86847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ea5565b91508082528784828501011115611f9c57600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060008060608587031215611fd057600080fd5b8435611fdb81611b57565b935060208501359250604085013567ffffffffffffffff811115611ffe57600080fd5b611dcd87828801611b79565b60008060008060008060008060a0898b03121561202657600080fd5b883561203181611b57565b9750602089013561204181611b57565b9650604089013567ffffffffffffffff8082111561205e57600080fd5b61206a8c838d01611d28565b909850965060608b013591508082111561208357600080fd5b61208f8c838d01611d28565b909650945060808b0135915080821115611c5257600080fd5b60808101818360005b60048110156120d05781518352602092830192909101906001016120b1565b50505092915050565b6000608082840312156120eb57600080fd5b82601f8301126120fa57600080fd5b6040516080810181811067ffffffffffffffff8211171561211d5761211d611e76565b60405280608084018581111561213257600080fd5b845b8181101561214c578035835260209283019201612134565b509195945050505050565b60008060008060008060a0878903121561217057600080fd5b863561217b81611b57565b9550602087013561218b81611b57565b94506040870135935060608701359250608087013567ffffffffffffffff8111156121b557600080fd5b6121c189828a01611b79565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261223757600080fd5b83018035915067ffffffffffffffff82111561225257600080fd5b602001915036819003821315611bbb57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036122c7576122c7612267565b5060010190565b6000602082840312156122e057600080fd5b5051919050565b60005b838110156123025781810151838201526020016122ea565b83811115610e365750506000910152565b600082516123258184602087016122e7565b9190910192915050565b60006bffffffffffffffffffffffff80831681810361235057612350612267565b6001019392505050565b60208152600082518060208401526123798160408501602087016122e7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c05abe9135923fb303076e2688f3ffa6d18a9c1c6aa6b6566b845ec8d8ac3e6964736f6c634300080f0033";

type BrokenBLSAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrokenBLSAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrokenBLSAccount__factory extends ContractFactory {
  constructor(...args: BrokenBLSAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BrokenBLSAccount> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<BrokenBLSAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): BrokenBLSAccount {
    return super.attach(address) as BrokenBLSAccount;
  }
  override connect(signer: Signer): BrokenBLSAccount__factory {
    return super.connect(signer) as BrokenBLSAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrokenBLSAccountInterface {
    return new utils.Interface(_abi) as BrokenBLSAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrokenBLSAccount {
    return new Contract(address, _abi, signerOrProvider) as BrokenBLSAccount;
  }
}
