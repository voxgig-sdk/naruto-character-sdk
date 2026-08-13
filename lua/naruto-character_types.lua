-- Typed models for the NarutoCharacter SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field debut? table
---@field family? table
---@field id? number
---@field images? table
---@field jutsu? table
---@field name? string
---@field natureType? table
---@field personal? table
---@field rank? table
---@field uniqueTraits? table
---@field voiceActors? table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field debut? table
---@field family? table
---@field id? number
---@field images? table
---@field jutsu? table
---@field name? string
---@field natureType? table
---@field personal? table
---@field rank? table
---@field uniqueTraits? table
---@field voiceActors? table

---@class Clan
---@field characters? table
---@field id? number
---@field name? string

---@class ClanListMatch
---@field characters? table
---@field id? number
---@field name? string

local M = {}

return M
