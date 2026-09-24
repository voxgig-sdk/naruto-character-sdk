

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"characters":{"a":true,"h":"Characters","n":"characters","r":false,"sh":"List of characters belonging to this clan","t":"`$ARRAY`","key$":"characters","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the clan","t":"`$INTEGER`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Clan name","t":"`$STRING`","key$":"name","index$":2}},"id":{"field":"id","name":"id"},"name":"clan","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /clan","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/clan","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"clan"}],"t":{"req":"`reqdata`","res":"`body.clans`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"clan","name__orig":"clan","Name":"Clan","name_":"clan","name-":"clan","NAME":"CLAN","index$":1}, {"active":true,"entity":"clan","key$":"BasicClanFlow","kind":"basic","name":"BasicClanFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"clan_ref01"}}],"index$":0}]}, 'Clan', {"GET /clan":{"protocol":"http","operationId":"getAllClans","responses":{"200":{"description":"Successful response with list of clans","content":{"application/json":{"schema":{"type":"object","properties":{"clans":{"items":{"properties":{"characters":{"description":"List of characters belonging to this clan","items":{"properties":{"id":{"type":"integer"},"name":{"type":"string"}},"type":"object"},"type":"array","key$":"characters"},"id":{"description":"Unique identifier for the clan","type":"integer","key$":"id"},"name":{"description":"Clan name","type":"string","key$":"name"}},"type":"object","x-ref":"#/components/schemas/Clan","index$":0},"key$":"clans","type":"array"},"currentPage":{"key$":"currentPage","type":"integer"},"pageSize":{"key$":"pageSize","type":"integer"},"totalClans":{"key$":"totalClans","type":"integer"}}}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"},"statusCode":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"},"statusCode":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"limit","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","default":20,"minimum":1,"maximum":100},"index$":1}],"securitySource":"unspecified"}})
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
  
