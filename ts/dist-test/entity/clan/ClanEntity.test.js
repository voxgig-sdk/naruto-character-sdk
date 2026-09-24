"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ClanEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NARUTO_CHARACTER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NARUTO_CHARACTER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NarutoCharacterSDK.test();
        const ent = testsdk.Clan();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NARUTO_CHARACTER_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'clan.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "characters": { "a": true, "h": "Characters", "n": "characters", "r": false, "sh": "List of characters belonging to this clan", "t": "`$ARRAY`", "key$": "characters", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the clan", "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Clan name", "t": "`$STRING`", "key$": "name", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "clan", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /clan", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/clan", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "clan" }], "t": { "req": "`reqdata`", "res": "`body.clans`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "clan", "name__orig": "clan", "Name": "Clan", "name_": "clan", "name-": "clan", "NAME": "CLAN", "index$": 1 }, { "active": true, "entity": "clan", "key$": "BasicClanFlow", "kind": "basic", "name": "BasicClanFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "clan_ref01" } }], "index$": 0 }] }, 'Clan', { "GET /clan": { "protocol": "http", "operationId": "getAllClans", "responses": { "200": { "description": "Successful response with list of clans", "content": { "application/json": { "schema": { "type": "object", "properties": { "clans": { "items": { "properties": { "characters": { "description": "List of characters belonging to this clan", "items": { "properties": { "id": { "type": "integer" }, "name": { "type": "string" } }, "type": "object" }, "type": "array", "key$": "characters" }, "id": { "description": "Unique identifier for the clan", "type": "integer", "key$": "id" }, "name": { "description": "Clan name", "type": "string", "key$": "name" } }, "type": "object", "x-ref": "#/components/schemas/Clan", "index$": 0 }, "key$": "clans", "type": "array" }, "currentPage": { "key$": "currentPage", "type": "integer" }, "pageSize": { "key$": "pageSize", "type": "integer" }, "totalClans": { "key$": "totalClans", "type": "integer" } } } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of results per page", "required": false, "schema": { "type": "integer", "default": 20, "minimum": 1, "maximum": 100 }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let clan_ref01_data = Object.values(setup.data.existing.clan)[0];
        // LIST
        const clan_ref01_ent = client.Clan();
        const clan_ref01_match = {};
        const clan_ref01_list = (await clan_ref01_ent.list(clan_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/clan/ClanTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NarutoCharacterSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['clan01', 'clan02', 'clan03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NARUTO_CHARACTER_TEST_CLAN_ENTID': idmap,
        'NARUTO_CHARACTER_TEST_LIVE': 'FALSE',
        'NARUTO_CHARACTER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NARUTO_CHARACTER_TEST_CLAN_ENTID'];
    const live = 'TRUE' === env.NARUTO_CHARACTER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NARUTO_CHARACTER_TEST_CLAN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NarutoCharacterSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ClanEntity.test.js.map