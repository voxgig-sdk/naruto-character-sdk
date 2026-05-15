<?php
declare(strict_types=1);

// NarutoCharacter SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NarutoCharacterFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NarutoCharacterBaseFeature();
            case "test":
                return new NarutoCharacterTestFeature();
            default:
                return new NarutoCharacterBaseFeature();
        }
    }
}
