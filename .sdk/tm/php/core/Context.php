<?php
declare(strict_types=1);

// NarutoCharacter SDK context

require_once __DIR__ . '/Control.php';
require_once __DIR__ . '/Operation.php';
require_once __DIR__ . '/Spec.php';
require_once __DIR__ . '/Result.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/Error.php';
require_once __DIR__ . '/Helpers.php';

class NarutoCharacterContext
{
    public string $id;
    public array $out;
    public mixed $client;
    public ?NarutoCharacterUtility $utility;
    public NarutoCharacterControl $ctrl;
    public array $meta;
    public ?array $config;
    public ?array $entopts;
    public ?array $options;
    public mixed $entity;
    public ?array $shared;
    public array $opmap;
    public array $data;
    public array $reqdata;
    public array $match;
    public array $reqmatch;
    public ?array $point;
    public ?NarutoCharacterSpec $spec;
    public ?NarutoCharacterResult $result;
    public ?NarutoCharacterResponse $response;
    public NarutoCharacterOperation $op;

    public function __construct(array $ctxmap = [], ?self $basectx = null)
    {
        $this->id = 'C' . random_int(10000000, 99999999);
        $this->out = [];

        $this->client = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'client') ?? ($basectx ? $basectx->client : null);
        $this->utility = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'utility') ?? ($basectx ? $basectx->utility : null);

        $this->ctrl = new NarutoCharacterControl();
        $ctrl_raw = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'ctrl');
        if (is_array($ctrl_raw)) {
            if (array_key_exists('throw', $ctrl_raw)) {
                $this->ctrl->throw_err = $ctrl_raw['throw'];
            }
            if (isset($ctrl_raw['explain']) && is_array($ctrl_raw['explain'])) {
                $this->ctrl->explain = $ctrl_raw['explain'];
            }
        } elseif ($basectx !== null && $basectx->ctrl !== null) {
            $this->ctrl = $basectx->ctrl;
        }

        $m = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'meta');
        $this->meta = is_array($m) ? $m : ($basectx ? $basectx->meta ?? [] : []);

        $cfg = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'config');
        $this->config = is_array($cfg) ? $cfg : ($basectx ? $basectx->config : null);

        $eo = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'entopts');
        $this->entopts = is_array($eo) ? $eo : ($basectx ? $basectx->entopts : null);

        $o = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'options');
        $this->options = is_array($o) ? $o : ($basectx ? $basectx->options : null);

        $e = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'entity');
        $this->entity = $e ?? ($basectx ? $basectx->entity : null);

        $s = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'shared');
        $this->shared = is_array($s) ? $s : ($basectx ? $basectx->shared : null);

        $om = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'opmap');
        $this->opmap = is_array($om) ? $om : ($basectx ? $basectx->opmap ?? [] : []);

        $this->data = NarutoCharacterHelpers::to_map(NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'data')) ?? [];
        $this->reqdata = NarutoCharacterHelpers::to_map(NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'reqdata')) ?? [];
        $this->match = NarutoCharacterHelpers::to_map(NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'match')) ?? [];
        $this->reqmatch = NarutoCharacterHelpers::to_map(NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'reqmatch')) ?? [];

        $pt = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'point');
        $this->point = is_array($pt) ? $pt : ($basectx ? $basectx->point : null);

        $sp = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'spec');
        $this->spec = ($sp instanceof NarutoCharacterSpec) ? $sp : ($basectx ? $basectx->spec : null);

        $r = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'result');
        $this->result = ($r instanceof NarutoCharacterResult) ? $r : ($basectx ? $basectx->result : null);

        $rp = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'response');
        $this->response = ($rp instanceof NarutoCharacterResponse) ? $rp : ($basectx ? $basectx->response : null);

        $opname = NarutoCharacterHelpers::get_ctx_prop($ctxmap, 'opname') ?? '';
        $this->op = $this->resolve_op($opname);
    }

    public function resolve_op(string $opname): NarutoCharacterOperation
    {
        if (isset($this->opmap[$opname])) {
            return $this->opmap[$opname];
        }
        if ($opname === '') {
            return new NarutoCharacterOperation([]);
        }

        $entname = (is_object($this->entity) && method_exists($this->entity, 'get_name'))
            ? $this->entity->get_name()
            : '_';
        $opcfg = \Voxgig\Struct\Struct::getpath($this->config, "entity.{$entname}.op.{$opname}");

        $input = ($opname === 'update' || $opname === 'create') ? 'data' : 'match';

        $points = [];
        if (is_array($opcfg)) {
            $t = \Voxgig\Struct\Struct::getprop($opcfg, 'points');
            if (is_array($t)) {
                $points = $t;
            }
        }

        $op = new NarutoCharacterOperation([
            'entity' => $entname,
            'name' => $opname,
            'input' => $input,
            'points' => $points,
        ]);
        $this->opmap[$opname] = $op;
        return $op;
    }

    public function make_error(string $code, string $msg): NarutoCharacterError
    {
        return new NarutoCharacterError($code, $msg, $this);
    }
}
