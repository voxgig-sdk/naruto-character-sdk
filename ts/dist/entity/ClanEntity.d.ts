import { NarutoCharacterEntityBase } from '../NarutoCharacterEntityBase';
import type { NarutoCharacterSDK } from '../NarutoCharacterSDK';
import type { Control } from '../types';
import type { Clan, ClanListMatch } from '../NarutoCharacterTypes';
declare class ClanEntity extends NarutoCharacterEntityBase<Clan> {
    constructor(client: NarutoCharacterSDK, entopts: any);
    make(this: ClanEntity): ClanEntity;
    list(this: any, reqmatch?: ClanListMatch, ctrl?: Control): Promise<ClanEntity[]>;
}
export { ClanEntity };
