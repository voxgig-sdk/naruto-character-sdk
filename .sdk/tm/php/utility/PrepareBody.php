<?php
declare(strict_types=1);

// NarutoCharacter SDK utility: prepare_body

class NarutoCharacterPrepareBody
{
    public static function call(NarutoCharacterContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
