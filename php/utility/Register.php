<?php
declare(strict_types=1);

// NarutoCharacter SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NarutoCharacterUtility::setRegistrar(function (NarutoCharacterUtility $u): void {
    $u->clean = [NarutoCharacterClean::class, 'call'];
    $u->done = [NarutoCharacterDone::class, 'call'];
    $u->make_error = [NarutoCharacterMakeError::class, 'call'];
    $u->feature_add = [NarutoCharacterFeatureAdd::class, 'call'];
    $u->feature_hook = [NarutoCharacterFeatureHook::class, 'call'];
    $u->feature_init = [NarutoCharacterFeatureInit::class, 'call'];
    $u->fetcher = [NarutoCharacterFetcher::class, 'call'];
    $u->make_fetch_def = [NarutoCharacterMakeFetchDef::class, 'call'];
    $u->make_context = [NarutoCharacterMakeContext::class, 'call'];
    $u->make_options = [NarutoCharacterMakeOptions::class, 'call'];
    $u->make_request = [NarutoCharacterMakeRequest::class, 'call'];
    $u->make_response = [NarutoCharacterMakeResponse::class, 'call'];
    $u->make_result = [NarutoCharacterMakeResult::class, 'call'];
    $u->make_point = [NarutoCharacterMakePoint::class, 'call'];
    $u->make_spec = [NarutoCharacterMakeSpec::class, 'call'];
    $u->make_url = [NarutoCharacterMakeUrl::class, 'call'];
    $u->param = [NarutoCharacterParam::class, 'call'];
    $u->prepare_auth = [NarutoCharacterPrepareAuth::class, 'call'];
    $u->prepare_body = [NarutoCharacterPrepareBody::class, 'call'];
    $u->prepare_headers = [NarutoCharacterPrepareHeaders::class, 'call'];
    $u->prepare_method = [NarutoCharacterPrepareMethod::class, 'call'];
    $u->prepare_params = [NarutoCharacterPrepareParams::class, 'call'];
    $u->prepare_path = [NarutoCharacterPreparePath::class, 'call'];
    $u->prepare_query = [NarutoCharacterPrepareQuery::class, 'call'];
    $u->result_basic = [NarutoCharacterResultBasic::class, 'call'];
    $u->result_body = [NarutoCharacterResultBody::class, 'call'];
    $u->result_headers = [NarutoCharacterResultHeaders::class, 'call'];
    $u->transform_request = [NarutoCharacterTransformRequest::class, 'call'];
    $u->transform_response = [NarutoCharacterTransformResponse::class, 'call'];
});
