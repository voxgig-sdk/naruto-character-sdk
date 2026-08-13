# frozen_string_literal: true

# Typed models for the NarutoCharacter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] debut
#   @return [Hash, nil]
#
# @!attribute [rw] family
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] images
#   @return [Array, nil]
#
# @!attribute [rw] jutsu
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] natureType
#   @return [Array, nil]
#
# @!attribute [rw] personal
#   @return [Hash, nil]
#
# @!attribute [rw] rank
#   @return [Hash, nil]
#
# @!attribute [rw] uniqueTraits
#   @return [Array, nil]
#
# @!attribute [rw] voiceActors
#   @return [Hash, nil]
Character = Struct.new(
  :debut,
  :family,
  :id,
  :images,
  :jutsu,
  :name,
  :natureType,
  :personal,
  :rank,
  :uniqueTraits,
  :voiceActors,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] debut
#   @return [Hash, nil]
#
# @!attribute [rw] family
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] images
#   @return [Array, nil]
#
# @!attribute [rw] jutsu
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] natureType
#   @return [Array, nil]
#
# @!attribute [rw] personal
#   @return [Hash, nil]
#
# @!attribute [rw] rank
#   @return [Hash, nil]
#
# @!attribute [rw] uniqueTraits
#   @return [Array, nil]
#
# @!attribute [rw] voiceActors
#   @return [Hash, nil]
CharacterListMatch = Struct.new(
  :debut,
  :family,
  :id,
  :images,
  :jutsu,
  :name,
  :natureType,
  :personal,
  :rank,
  :uniqueTraits,
  :voiceActors,
  keyword_init: true
)

# Clan entity data model.
#
# @!attribute [rw] characters
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Clan = Struct.new(
  :characters,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Clan#list.
#
# @!attribute [rw] characters
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ClanListMatch = Struct.new(
  :characters,
  :id,
  :name,
  keyword_init: true
)

