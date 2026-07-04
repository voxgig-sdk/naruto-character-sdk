# Typed models for the NarutoCharacter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    debut: Optional[dict] = None
    family: Optional[dict] = None
    id: Optional[int] = None
    image: Optional[list] = None
    jutsu: Optional[list] = None
    name: Optional[str] = None
    nature_type: Optional[list] = None
    personal: Optional[dict] = None
    rank: Optional[dict] = None
    unique_trait: Optional[list] = None
    voice_actor: Optional[dict] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    debut: Optional[dict] = None
    family: Optional[dict] = None
    id: Optional[int] = None
    image: Optional[list] = None
    jutsu: Optional[list] = None
    name: Optional[str] = None
    nature_type: Optional[list] = None
    personal: Optional[dict] = None
    rank: Optional[dict] = None
    unique_trait: Optional[list] = None
    voice_actor: Optional[dict] = None


@dataclass
class Clan:
    character: Optional[list] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class ClanListMatch:
    character: Optional[list] = None
    id: Optional[int] = None
    name: Optional[str] = None

