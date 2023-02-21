import { Inject } from '@nestjs/common';
import { parseBytes32String } from 'ethers/lib/utils';
import { gql } from 'graphql-request';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { getAppAssetImage } from '~app-toolkit/helpers/presentation/image.present';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  DefaultContractPositionDefinition,
  GetDisplayPropsParams,
  GetTokenBalancesParams,
} from '~position/template/contract-position.template.types';

import { SynthetixContractFactory, SynthetixPerp } from '../contracts';

export type GetContracts = {
  futuresMarkets: {
    id: string;
    marketKey: string;
  }[];
};

export const getContractsQuery = gql`
  query MyQuery {
    futuresMarkets {
      id
      marketKey
    }
  }
`;

export abstract class OptimismSynthetixPerpContractPositionFetcher extends ContractPositionTemplatePositionFetcher<SynthetixPerp> {
  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(SynthetixContractFactory) protected readonly contractFactory: SynthetixContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): SynthetixPerp {
    return this.contractFactory.synthetixPerp({ address, network: this.network });
  }

  abstract getDefinitions(): Promise<DefaultContractPositionDefinition[]>;

  async getTokenDefinitions() {
    return [
      {
        address: '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9', // sUSD
        metaType: MetaType.SUPPLIED,
        network: this.network,
      },
    ];
  }

  protected async getBaseAsset({ contractPosition }) {
    const multicall = this.appToolkit.getMulticall(this.network);
    const contract = multicall.wrap(this.getContract(contractPosition.address));
    const baseAssetRaw = await contract.baseAsset();
    let baseAsset = parseBytes32String(baseAssetRaw);
    //some market use legacy naming starting with an "s"
    if (baseAsset.charAt(0) === 's') {
      baseAsset = baseAsset.substring(1);
    }
    return baseAsset;
  }

  abstract getLabel({ contractPosition }: GetDisplayPropsParams<SynthetixPerp>): Promise<string>;

  async getImages({ contractPosition }: GetDisplayPropsParams<SynthetixPerp>) {
    const baseAsset = await this.getBaseAsset({ contractPosition });
    return [getAppAssetImage('synthetix', `s${baseAsset}`)];
  }

  async getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<SynthetixPerp>) {
    const remainingMargin = await contract.remainingMargin(address);
    return [remainingMargin.marginRemaining];
  }
}