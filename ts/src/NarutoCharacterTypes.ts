// Typed models for the NarutoCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  debut?: Record<string, any>
  family?: Record<string, any>
  id?: number
  image?: any[]
  jutsu?: any[]
  name?: string
  nature_type?: any[]
  personal?: Record<string, any>
  rank?: Record<string, any>
  unique_trait?: any[]
  voice_actor?: Record<string, any>
}

export interface CharacterLoadMatch {
  id: number
}

export type CharacterListMatch = Partial<Character>

export interface Clan {
  character?: any[]
  id?: number
  name?: string
}

export type ClanListMatch = Partial<Clan>

