import { CharacterEntity } from './entity/CharacterEntity';
import { ClanEntity } from './entity/ClanEntity';
export type * from './NarutoCharacterTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NarutoCharacterEntityBase } from './NarutoCharacterEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class NarutoCharacterSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Clan(entopts?: Record<string, any>): ClanEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NarutoCharacterSDK;
    tester(testopts?: any, sdkopts?: any): NarutoCharacterSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NarutoCharacterSDK;
export { stdutil, config, BaseFeature, NarutoCharacterEntityBase, NarutoCharacterSDK, SDK, };
