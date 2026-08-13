<?php
declare(strict_types=1);

// Typed models for the NarutoCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?array $debut = null;
    public ?array $family = null;
    public ?int $id = null;
    public ?array $images = null;
    public ?array $jutsu = null;
    public ?string $name = null;
    public ?array $natureType = null;
    public ?array $personal = null;
    public ?array $rank = null;
    public ?array $uniqueTraits = null;
    public ?array $voiceActors = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?array $debut = null;
    public ?array $family = null;
    public ?int $id = null;
    public ?array $images = null;
    public ?array $jutsu = null;
    public ?string $name = null;
    public ?array $natureType = null;
    public ?array $personal = null;
    public ?array $rank = null;
    public ?array $uniqueTraits = null;
    public ?array $voiceActors = null;
}

/** Clan entity data model. */
class Clan
{
    public ?array $characters = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for Clan#list. */
class ClanListMatch
{
    public ?array $characters = null;
    public ?int $id = null;
    public ?string $name = null;
}

