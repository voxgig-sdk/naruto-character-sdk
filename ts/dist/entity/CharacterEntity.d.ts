import { NarutoCharacterEntityBase } from '../NarutoCharacterEntityBase';
import type { NarutoCharacterSDK } from '../NarutoCharacterSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../NarutoCharacterTypes';
declare class CharacterEntity extends NarutoCharacterEntityBase<Character> {
    constructor(client: NarutoCharacterSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
