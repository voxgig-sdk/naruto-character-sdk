<?php
declare(strict_types=1);

// NarutoCharacter SDK utility: result_headers

class NarutoCharacterResultHeaders
{
    public static function call(NarutoCharacterContext $ctx): ?NarutoCharacterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
