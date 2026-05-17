package voxgignarutocharactersdk

import (
	"github.com/voxgig-sdk/naruto-character-sdk/go/core"
	"github.com/voxgig-sdk/naruto-character-sdk/go/entity"
	"github.com/voxgig-sdk/naruto-character-sdk/go/feature"
	_ "github.com/voxgig-sdk/naruto-character-sdk/go/utility"
)

// Type aliases preserve external API.
type NarutoCharacterSDK = core.NarutoCharacterSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NarutoCharacterEntity = core.NarutoCharacterEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NarutoCharacterError = core.NarutoCharacterError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.NarutoCharacterSDK, entopts map[string]any) core.NarutoCharacterEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewClanEntityFunc = func(client *core.NarutoCharacterSDK, entopts map[string]any) core.NarutoCharacterEntity {
		return entity.NewClanEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNarutoCharacterSDK = core.NewNarutoCharacterSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
