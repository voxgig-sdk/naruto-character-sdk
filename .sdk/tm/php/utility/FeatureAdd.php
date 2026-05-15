<?php
declare(strict_types=1);

// NarutoCharacter SDK utility: feature_add

class NarutoCharacterFeatureAdd
{
    public static function call(NarutoCharacterContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
