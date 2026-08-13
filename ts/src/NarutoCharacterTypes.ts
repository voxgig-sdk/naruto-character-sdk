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
  images?: any[]
  jutsu?: any[]
  name?: string
  natureType?: any[]
  personal?: Record<string, any>
  rank?: Record<string, any>
  uniqueTraits?: any[]
  voiceActors?: Record<string, any>
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  debut?: Record<string, any>
  family?: Record<string, any>
  id?: number
  images?: any[]
  jutsu?: any[]
  name?: string
  natureType?: any[]
  personal?: Record<string, any>
  rank?: Record<string, any>
  uniqueTraits?: any[]
  voiceActors?: Record<string, any>
}

export interface Clan {
  characters?: any[]
  id?: number
  name?: string
}

export interface ClanListMatch {
  characters?: any[]
  id?: number
  name?: string
}

