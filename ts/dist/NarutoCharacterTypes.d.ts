export interface Character {
    debut?: Record<string, any>;
    family?: Record<string, any>;
    id?: number;
    images?: any[];
    jutsu?: any[];
    name?: string;
    natureType?: any[];
    personal?: Record<string, any>;
    rank?: Record<string, any>;
    uniqueTraits?: any[];
    voiceActors?: Record<string, any>;
}
export interface CharacterLoadMatch {
    id: number;
}
export interface CharacterListMatch {
    limit?: number;
    name?: string;
    page?: number;
}
export interface Clan {
    characters?: any[];
    id?: number;
    name?: string;
}
export interface ClanListMatch {
    limit?: number;
    page?: number;
}
