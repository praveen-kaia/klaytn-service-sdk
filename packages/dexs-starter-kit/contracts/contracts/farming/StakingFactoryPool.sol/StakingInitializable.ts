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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface StakingInitializableInterface extends utils.Interface {
  functions: {
    "PRECISION_FACTOR()": FunctionFragment;
    "STAKING_FACTORY()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "emergencyRewardWithdraw(uint256,address)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "hasUserLimit()": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(address)": FunctionFragment;
    "pool()": FunctionFragment;
    "recoverToken(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stopReward()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePoolLimitPerUser(bool,uint256)": FunctionFragment;
    "updateRewardPerBlock(uint256)": FunctionFragment;
    "updateStartAndEndBlocks(uint256,uint256)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRECISION_FACTOR"
      | "STAKING_FACTORY"
      | "deposit"
      | "emergencyRewardWithdraw"
      | "emergencyWithdraw"
      | "hasUserLimit"
      | "initialize"
      | "owner"
      | "pendingReward"
      | "pool"
      | "recoverToken"
      | "renounceOwnership"
      | "stopReward"
      | "transferOwnership"
      | "updatePoolLimitPerUser"
      | "updateRewardPerBlock"
      | "updateStartAndEndBlocks"
      | "userInfo"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PRECISION_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKING_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyRewardWithdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePoolLimitPerUser",
    values: [PromiseOrValue<boolean>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardPerBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStartAndEndBlocks",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "PRECISION_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKING_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyRewardWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasUserLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stopReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePoolLimitPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStartAndEndBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256)": EventFragment;
    "NewPoolLimit(uint256)": EventFragment;
    "NewRewardPerBlock(uint256)": EventFragment;
    "NewStartAndEndBlocks(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsStop(uint256)": EventFragment;
    "TokenRecovery(address,address,uint256)": EventFragment;
    "UpdatePool(uint256,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPoolLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRewardPerBlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewStartAndEndBlocks"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsStop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRecovery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber],
  EmergencyWithdrawEventObject
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export interface NewPoolLimitEventObject {
  poolLimitPerUser: BigNumber;
}
export type NewPoolLimitEvent = TypedEvent<
  [BigNumber],
  NewPoolLimitEventObject
>;

export type NewPoolLimitEventFilter = TypedEventFilter<NewPoolLimitEvent>;

export interface NewRewardPerBlockEventObject {
  rewardPerBlock: BigNumber;
}
export type NewRewardPerBlockEvent = TypedEvent<
  [BigNumber],
  NewRewardPerBlockEventObject
>;

export type NewRewardPerBlockEventFilter =
  TypedEventFilter<NewRewardPerBlockEvent>;

export interface NewStartAndEndBlocksEventObject {
  startBlock: BigNumber;
  endBlock: BigNumber;
}
export type NewStartAndEndBlocksEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewStartAndEndBlocksEventObject
>;

export type NewStartAndEndBlocksEventFilter =
  TypedEventFilter<NewStartAndEndBlocksEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardsStopEventObject {
  blockNumber: BigNumber;
}
export type RewardsStopEvent = TypedEvent<[BigNumber], RewardsStopEventObject>;

export type RewardsStopEventFilter = TypedEventFilter<RewardsStopEvent>;

export interface TokenRecoveryEventObject {
  token: string;
  recipient: string;
  amount: BigNumber;
}
export type TokenRecoveryEvent = TypedEvent<
  [string, string, BigNumber],
  TokenRecoveryEventObject
>;

export type TokenRecoveryEventFilter = TypedEventFilter<TokenRecoveryEvent>;

export interface UpdatePoolEventObject {
  lastRewardBlock: BigNumber;
  stakedTokenSupply: BigNumber;
  accTokenPerShare: BigNumber;
}
export type UpdatePoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  UpdatePoolEventObject
>;

export type UpdatePoolEventFilter = TypedEventFilter<UpdatePoolEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface StakingInitializable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInitializableInterface;

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
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    STAKING_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emergencyRewardWithdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _stakedToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      _numberBlocksForUserLimit: PromiseOrValue<BigNumberish>,
      _multisig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pool(
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isInitialized: boolean;
        stakedToken: string;
        userLimit: boolean;
        rewardToken: string;
        startBlock: BigNumber;
        rewardEndBlock: BigNumber;
        lastRewardBlock: BigNumber;
        numberBlocksForUserLimit: BigNumber;
        poolLimitPerUser: BigNumber;
        accTokenPerShare: BigNumber;
        rewardPerBlock: BigNumber;
        totalStaked: BigNumber;
      }
    >;

    recoverToken(
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stopReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePoolLimitPerUser(
      _userLimit: PromiseOrValue<boolean>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStartAndEndBlocks(
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  STAKING_FACTORY(overrides?: CallOverrides): Promise<string>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emergencyRewardWithdraw(
    _amount: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _stakedToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    _rewardEndBlock: PromiseOrValue<BigNumberish>,
    _poolLimitPerUser: PromiseOrValue<BigNumberish>,
    _numberBlocksForUserLimit: PromiseOrValue<BigNumberish>,
    _multisig: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingReward(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pool(
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      string,
      boolean,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      isInitialized: boolean;
      stakedToken: string;
      userLimit: boolean;
      rewardToken: string;
      startBlock: BigNumber;
      rewardEndBlock: BigNumber;
      lastRewardBlock: BigNumber;
      numberBlocksForUserLimit: BigNumber;
      poolLimitPerUser: BigNumber;
      accTokenPerShare: BigNumber;
      rewardPerBlock: BigNumber;
      totalStaked: BigNumber;
    }
  >;

  recoverToken(
    _token: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stopReward(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePoolLimitPerUser(
    _userLimit: PromiseOrValue<boolean>,
    _poolLimitPerUser: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRewardPerBlock(
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStartAndEndBlocks(
    _startBlock: PromiseOrValue<BigNumberish>,
    _rewardEndBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING_FACTORY(overrides?: CallOverrides): Promise<string>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyRewardWithdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _stakedToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      _numberBlocksForUserLimit: PromiseOrValue<BigNumberish>,
      _multisig: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingReward(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool(
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isInitialized: boolean;
        stakedToken: string;
        userLimit: boolean;
        rewardToken: string;
        startBlock: BigNumber;
        rewardEndBlock: BigNumber;
        lastRewardBlock: BigNumber;
        numberBlocksForUserLimit: BigNumber;
        poolLimitPerUser: BigNumber;
        accTokenPerShare: BigNumber;
        rewardPerBlock: BigNumber;
        totalStaked: BigNumber;
      }
    >;

    recoverToken(
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stopReward(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolLimitPerUser(
      _userLimit: PromiseOrValue<boolean>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardPerBlock(
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStartAndEndBlocks(
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "NewPoolLimit(uint256)"(poolLimitPerUser?: null): NewPoolLimitEventFilter;
    NewPoolLimit(poolLimitPerUser?: null): NewPoolLimitEventFilter;

    "NewRewardPerBlock(uint256)"(
      rewardPerBlock?: null
    ): NewRewardPerBlockEventFilter;
    NewRewardPerBlock(rewardPerBlock?: null): NewRewardPerBlockEventFilter;

    "NewStartAndEndBlocks(uint256,uint256)"(
      startBlock?: null,
      endBlock?: null
    ): NewStartAndEndBlocksEventFilter;
    NewStartAndEndBlocks(
      startBlock?: null,
      endBlock?: null
    ): NewStartAndEndBlocksEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RewardsStop(uint256)"(blockNumber?: null): RewardsStopEventFilter;
    RewardsStop(blockNumber?: null): RewardsStopEventFilter;

    "TokenRecovery(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      recipient?: null,
      amount?: null
    ): TokenRecoveryEventFilter;
    TokenRecovery(
      token?: PromiseOrValue<string> | null,
      recipient?: null,
      amount?: null
    ): TokenRecoveryEventFilter;

    "UpdatePool(uint256,uint256,uint256)"(
      lastRewardBlock?: null,
      stakedTokenSupply?: null,
      accTokenPerShare?: null
    ): UpdatePoolEventFilter;
    UpdatePool(
      lastRewardBlock?: null,
      stakedTokenSupply?: null,
      accTokenPerShare?: null
    ): UpdatePoolEventFilter;

    "Withdraw(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emergencyRewardWithdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _stakedToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      _numberBlocksForUserLimit: PromiseOrValue<BigNumberish>,
      _multisig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stopReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePoolLimitPerUser(
      _userLimit: PromiseOrValue<boolean>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRewardPerBlock(
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStartAndEndBlocks(
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKING_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emergencyRewardWithdraw(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _stakedToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      _numberBlocksForUserLimit: PromiseOrValue<BigNumberish>,
      _multisig: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stopReward(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePoolLimitPerUser(
      _userLimit: PromiseOrValue<boolean>,
      _poolLimitPerUser: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStartAndEndBlocks(
      _startBlock: PromiseOrValue<BigNumberish>,
      _rewardEndBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
