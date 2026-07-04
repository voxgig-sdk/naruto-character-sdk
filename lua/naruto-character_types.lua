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
---@field image? table
---@field jutsu? table
---@field name? string
---@field nature_type? table
---@field personal? table
---@field rank? table
---@field unique_trait? table
---@field voice_actor? table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch

---@class Clan
---@field character? table
---@field id? number
---@field name? string

---@class ClanListMatch

local M = {}

return M
