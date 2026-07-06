// Typed models for the NarutoCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Debut *map[string]any `json:"debut,omitempty"`
	Family *map[string]any `json:"family,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *[]any `json:"image,omitempty"`
	Jutsu *[]any `json:"jutsu,omitempty"`
	Name *string `json:"name,omitempty"`
	NatureType *[]any `json:"nature_type,omitempty"`
	Personal *map[string]any `json:"personal,omitempty"`
	Rank *map[string]any `json:"rank,omitempty"`
	UniqueTrait *[]any `json:"unique_trait,omitempty"`
	VoiceActor *map[string]any `json:"voice_actor,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Debut *map[string]any `json:"debut,omitempty"`
	Family *map[string]any `json:"family,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *[]any `json:"image,omitempty"`
	Jutsu *[]any `json:"jutsu,omitempty"`
	Name *string `json:"name,omitempty"`
	NatureType *[]any `json:"nature_type,omitempty"`
	Personal *map[string]any `json:"personal,omitempty"`
	Rank *map[string]any `json:"rank,omitempty"`
	UniqueTrait *[]any `json:"unique_trait,omitempty"`
	VoiceActor *map[string]any `json:"voice_actor,omitempty"`
}

// Clan is the typed data model for the clan entity.
type Clan struct {
	Character *[]any `json:"character,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ClanListMatch is the typed request payload for Clan.ListTyped.
type ClanListMatch struct {
	Character *[]any `json:"character,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
