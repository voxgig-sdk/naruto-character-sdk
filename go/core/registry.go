package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *NarutoCharacterSDK, entopts map[string]any) NarutoCharacterEntity

var NewClanEntityFunc func(client *NarutoCharacterSDK, entopts map[string]any) NarutoCharacterEntity

