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
    public ?array $image = null;
    public ?array $jutsu = null;
    public ?string $name = null;
    public ?array $nature_type = null;
    public ?array $personal = null;
    public ?array $rank = null;
    public ?array $unique_trait = null;
    public ?array $voice_actor = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?array $debut = null;
    public ?array $family = null;
    public ?int $id = null;
    public ?array $image = null;
    public ?array $jutsu = null;
    public ?string $name = null;
    public ?array $nature_type = null;
    public ?array $personal = null;
    public ?array $rank = null;
    public ?array $unique_trait = null;
    public ?array $voice_actor = null;
}

/** Clan entity data model. */
class Clan
{
    public ?array $character = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Match filter for Clan#list (any subset of Clan fields). */
class ClanListMatch
{
    public ?array $character = null;
    public ?int $id = null;
    public ?string $name = null;
}

