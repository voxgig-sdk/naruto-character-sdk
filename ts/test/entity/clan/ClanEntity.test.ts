

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NarutoCharacterSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ClanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NARUTO_CHARACTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('NARUTO_CHARACTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NarutoCharacterSDK.test()
    const ent = testsdk.Clan()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NARUTO_CHARACTER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'clan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"characters","req":false,"short":"List of characters belonging to this clan","type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the clan","type":"`$INTEGER`","index$":1},{"active":true,"name":"name","req":false,"short":"Clan name","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"clan","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":20,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /clan","json":"{\"operationId\":\"getAllClans\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"clans\":{\"items\":{\"properties\":{\"characters\":{\"description\":\"List of characters belonging to this clan\",\"items\":{\"properties\":{\"id\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the clan\",\"type\":\"integer\"},\"name\":{\"description\":\"Clan name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"currentPage\":{\"type\":\"integer\"},\"pageSize\":{\"type\":\"integer\"},\"totalClans\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of clans\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clan","segments":[{"lit":"clan"}],"select":{"exist":["limit","page"]},"transform":{"req":"`reqdata`","res":"`body.clans`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"clan","name__orig":"clan","Name":"Clan","name_":"clan","name-":"clan","NAME":"CLAN","index$":1}, {"active":true,"entity":"clan","key$":"BasicClanFlow","kind":"basic","name":"BasicClanFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"clan_ref01"}}],"index$":0}]}, 'Clan')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let clan_ref01_data = Object.values(setup.data.existing.clan)[0] as any

    // LIST
    const clan_ref01_ent = client.Clan()
    const clan_ref01_match: any = {}

    const clan_ref01_list = (await clan_ref01_ent.list(clan_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/clan/ClanTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NarutoCharacterSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['clan01','clan02','clan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NARUTO_CHARACTER_TEST_CLAN_ENTID': idmap,
    'NARUTO_CHARACTER_TEST_LIVE': 'FALSE',
    'NARUTO_CHARACTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NARUTO_CHARACTER_TEST_CLAN_ENTID']

  const live = 'TRUE' === env.NARUTO_CHARACTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NARUTO_CHARACTER_TEST_CLAN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NarutoCharacterSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.NARUTO_CHARACTER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
