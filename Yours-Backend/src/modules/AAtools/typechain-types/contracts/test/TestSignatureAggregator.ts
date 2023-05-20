/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface TestSignatureAggregatorInterface extends utils.Interface {
  functions: {
    "addStake(address,uint32)": FunctionFragment;
    "aggregateSignatures((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])": FunctionFragment;
    "validateSignatures((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],bytes)": FunctionFragment;
    "validateUserOpSignature((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addStake"
      | "aggregateSignatures"
      | "validateSignatures"
      | "validateUserOpSignature"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addStake",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "aggregateSignatures",
    values: [UserOperationStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignatures",
    values: [UserOperationStruct[], PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOpSignature",
    values: [UserOperationStruct]
  ): string;

  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "aggregateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOpSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestSignatureAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestSignatureAggregatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addStake(
      entryPoint: PromiseOrValue<string>,
      delay: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<[string] & { aggregatedSignature: string }>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateUserOpSignature(
      arg0: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addStake(
    entryPoint: PromiseOrValue<string>,
    delay: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  aggregateSignatures(
    userOps: UserOperationStruct[],
    overrides?: CallOverrides
  ): Promise<string>;

  validateSignatures(
    userOps: UserOperationStruct[],
    signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  validateUserOpSignature(
    arg0: UserOperationStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addStake(
      entryPoint: PromiseOrValue<string>,
      delay: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOpSignature(
      arg0: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addStake(
      entryPoint: PromiseOrValue<string>,
      delay: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateUserOpSignature(
      arg0: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStake(
      entryPoint: PromiseOrValue<string>,
      delay: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    aggregateSignatures(
      userOps: UserOperationStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSignatures(
      userOps: UserOperationStruct[],
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateUserOpSignature(
      arg0: UserOperationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}