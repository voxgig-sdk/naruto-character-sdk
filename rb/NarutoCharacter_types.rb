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
# @!attribute [rw] image
#   @return [Array, nil]
#
# @!attribute [rw] jutsu
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nature_type
#   @return [Array, nil]
#
# @!attribute [rw] personal
#   @return [Hash, nil]
#
# @!attribute [rw] rank
#   @return [Hash, nil]
#
# @!attribute [rw] unique_trait
#   @return [Array, nil]
#
# @!attribute [rw] voice_actor
#   @return [Hash, nil]
Character = Struct.new(
  :debut,
  :family,
  :id,
  :image,
  :jutsu,
  :name,
  :nature_type,
  :personal,
  :rank,
  :unique_trait,
  :voice_actor,
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
# @!attribute [rw] image
#   @return [Array, nil]
#
# @!attribute [rw] jutsu
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nature_type
#   @return [Array, nil]
#
# @!attribute [rw] personal
#   @return [Hash, nil]
#
# @!attribute [rw] rank
#   @return [Hash, nil]
#
# @!attribute [rw] unique_trait
#   @return [Array, nil]
#
# @!attribute [rw] voice_actor
#   @return [Hash, nil]
CharacterListMatch = Struct.new(
  :debut,
  :family,
  :id,
  :image,
  :jutsu,
  :name,
  :nature_type,
  :personal,
  :rank,
  :unique_trait,
  :voice_actor,
  keyword_init: true
)

# Clan entity data model.
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Clan = Struct.new(
  :character,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Clan#list.
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ClanListMatch = Struct.new(
  :character,
  :id,
  :name,
  keyword_init: true
)

