<?php
declare(strict_types=1);

// NarutoCharacter SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NarutoCharacterMakeContext
{
    public static function call(array $ctxmap, ?NarutoCharacterContext $basectx): NarutoCharacterContext
    {
        return new NarutoCharacterContext($ctxmap, $basectx);
    }
}
