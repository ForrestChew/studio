import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import {
  BastionProtocolComptroller__factory,
  BastionProtocolCtoken__factory,
  BastionProtocolLptoken__factory,
  BastionProtocolSwap__factory,
} from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class BastionProtocolContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  bastionProtocolComptroller({ address, network }: ContractOpts) {
    return BastionProtocolComptroller__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  bastionProtocolCtoken({ address, network }: ContractOpts) {
    return BastionProtocolCtoken__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  bastionProtocolLptoken({ address, network }: ContractOpts) {
    return BastionProtocolLptoken__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  bastionProtocolSwap({ address, network }: ContractOpts) {
    return BastionProtocolSwap__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { BastionProtocolComptroller } from './ethers';
export type { BastionProtocolCtoken } from './ethers';
export type { BastionProtocolLptoken } from './ethers';
export type { BastionProtocolSwap } from './ethers';
