package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *NarutoCharacterSDK, entopts map[string]any) NarutoCharacterEntity

var NewClanEntityFunc func(client *NarutoCharacterSDK, entopts map[string]any) NarutoCharacterEntity

