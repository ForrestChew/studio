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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace SynthereumChainlinkPriceFeed {
  export type RolesStruct = {
    admin: PromiseOrValue<string>;
    maintainer: PromiseOrValue<string>;
  };

  export type RolesStructOutput = [string, string] & {
    admin: string;
    maintainer: string;
  };
}

export interface JarvisSynthereumPriceFeedInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'MAINTAINER_ROLE()': FunctionFragment;
    'getAggregator(bytes32)': FunctionFragment;
    'getLatestPrice(bytes32)': FunctionFragment;
    'getLatestPrices(bytes32[])': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'getRoleMember(bytes32,uint256)': FunctionFragment;
    'getRoleMemberCount(bytes32)': FunctionFragment;
    'getRoundPrice(bytes32,uint80)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'isPriceSupported(bytes32)': FunctionFragment;
    'pairs(bytes32)': FunctionFragment;
    'removePair(bytes32)': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'setPair(uint8,bytes32,address,bytes32[])': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'synthereumFinder()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'MAINTAINER_ROLE'
      | 'getAggregator'
      | 'getLatestPrice'
      | 'getLatestPrices'
      | 'getRoleAdmin'
      | 'getRoleMember'
      | 'getRoleMemberCount'
      | 'getRoundPrice'
      | 'grantRole'
      | 'hasRole'
      | 'isPriceSupported'
      | 'pairs'
      | 'removePair'
      | 'renounceRole'
      | 'revokeRole'
      | 'setPair'
      | 'supportsInterface'
      | 'synthereumFinder',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAINTAINER_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAggregator', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'getLatestPrice', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'getLatestPrices', values: [PromiseOrValue<BytesLike>[]]): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'getRoleMember',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getRoleMemberCount', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'getRoundPrice',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'isPriceSupported', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'pairs', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'removePair', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'renounceRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setPair',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'synthereumFinder', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAINTAINER_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAggregator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLatestPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLatestPrices', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleMember', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleMemberCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoundPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPriceSupported', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pairs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removePair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synthereumFinder', data: BytesLike): Result;

  events: {
    'RemovePair(bytes32)': EventFragment;
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
    'SetPair(bytes32,uint8,address,bytes32[])': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RemovePair'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetPair'): EventFragment;
}

export interface RemovePairEventObject {
  priceIdentifier: string;
}
export type RemovePairEvent = TypedEvent<[string], RemovePairEventObject>;

export type RemovePairEventFilter = TypedEventFilter<RemovePairEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[string, string, string], RoleAdminChangedEventObject>;

export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<[string, string, string], RoleGrantedEventObject>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<[string, string, string], RoleRevokedEventObject>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface SetPairEventObject {
  priceIdentifier: string;
  kind: number;
  aggregator: string;
  intermediatePairs: string[];
}
export type SetPairEvent = TypedEvent<[string, number, string, string[]], SetPairEventObject>;

export type SetPairEventFilter = TypedEventFilter<SetPairEvent>;

export interface JarvisSynthereumPriceFeed extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JarvisSynthereumPriceFeedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MAINTAINER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    getAggregator(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[string] & { aggregator: string }>;

    getLatestPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { price: BigNumber }>;

    getLatestPrices(
      _priceIdentifiers: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { prices: BigNumber[] }>;

    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoundPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { price: BigNumber }>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isPriceSupported(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { isSupported: boolean }>;

    pairs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, string] & {
        isSupported: boolean;
        priceType: number;
        aggregator: string;
      }
    >;

    removePair(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setPair(
      _kind: PromiseOrValue<BigNumberish>,
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _aggregator: PromiseOrValue<string>,
      _intermediatePairs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;

    synthereumFinder(overrides?: CallOverrides): Promise<[string]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MAINTAINER_ROLE(overrides?: CallOverrides): Promise<string>;

  getAggregator(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getLatestPrice(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  getLatestPrices(_priceIdentifiers: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber[]>;

  getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: PromiseOrValue<BytesLike>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

  getRoundPrice(
    _priceIdentifier: PromiseOrValue<BytesLike>,
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  isPriceSupported(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  pairs(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<
    [boolean, number, string] & {
      isSupported: boolean;
      priceType: number;
      aggregator: string;
    }
  >;

  removePair(
    _priceIdentifier: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setPair(
    _kind: PromiseOrValue<BigNumberish>,
    _priceIdentifier: PromiseOrValue<BytesLike>,
    _aggregator: PromiseOrValue<string>,
    _intermediatePairs: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  synthereumFinder(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MAINTAINER_ROLE(overrides?: CallOverrides): Promise<string>;

    getAggregator(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getLatestPrice(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getLatestPrices(_priceIdentifiers: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber[]>;

    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getRoundPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isPriceSupported(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

    pairs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, string] & {
        isSupported: boolean;
        priceType: number;
        aggregator: string;
      }
    >;

    removePair(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setPair(
      _kind: PromiseOrValue<BigNumberish>,
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _aggregator: PromiseOrValue<string>,
      _intermediatePairs: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

    synthereumFinder(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'RemovePair(bytes32)'(priceIdentifier?: PromiseOrValue<BytesLike> | null): RemovePairEventFilter;
    RemovePair(priceIdentifier?: PromiseOrValue<BytesLike> | null): RemovePairEventFilter;

    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null,
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null,
    ): RoleAdminChangedEventFilter;

    'RoleGranted(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
    ): RoleGrantedEventFilter;

    'RoleRevoked(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
    ): RoleRevokedEventFilter;

    'SetPair(bytes32,uint8,address,bytes32[])'(
      priceIdentifier?: PromiseOrValue<BytesLike> | null,
      kind?: null,
      aggregator?: null,
      intermediatePairs?: null,
    ): SetPairEventFilter;
    SetPair(
      priceIdentifier?: PromiseOrValue<BytesLike> | null,
      kind?: null,
      aggregator?: null,
      intermediatePairs?: null,
    ): SetPairEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MAINTAINER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    getAggregator(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getLatestPrice(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getLatestPrices(_priceIdentifiers: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    getRoundPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isPriceSupported(_priceIdentifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    pairs(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    removePair(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setPair(
      _kind: PromiseOrValue<BigNumberish>,
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _aggregator: PromiseOrValue<string>,
      _intermediatePairs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    synthereumFinder(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAINTAINER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAggregator(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getLatestPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getLatestPrices(
      _priceIdentifiers: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoundPrice(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isPriceSupported(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    pairs(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removePair(
      _priceIdentifier: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setPair(
      _kind: PromiseOrValue<BigNumberish>,
      _priceIdentifier: PromiseOrValue<BytesLike>,
      _aggregator: PromiseOrValue<string>,
      _intermediatePairs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    synthereumFinder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
