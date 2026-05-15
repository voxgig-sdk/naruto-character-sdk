<?php
declare(strict_types=1);

// NarutoCharacter SDK base feature

class NarutoCharacterBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NarutoCharacterContext $ctx, array $options): void {}
    public function PostConstruct(NarutoCharacterContext $ctx): void {}
    public function PostConstructEntity(NarutoCharacterContext $ctx): void {}
    public function SetData(NarutoCharacterContext $ctx): void {}
    public function GetData(NarutoCharacterContext $ctx): void {}
    public function GetMatch(NarutoCharacterContext $ctx): void {}
    public function SetMatch(NarutoCharacterContext $ctx): void {}
    public function PrePoint(NarutoCharacterContext $ctx): void {}
    public function PreSpec(NarutoCharacterContext $ctx): void {}
    public function PreRequest(NarutoCharacterContext $ctx): void {}
    public function PreResponse(NarutoCharacterContext $ctx): void {}
    public function PreResult(NarutoCharacterContext $ctx): void {}
    public function PreDone(NarutoCharacterContext $ctx): void {}
    public function PreUnexpected(NarutoCharacterContext $ctx): void {}
}
