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
(0, node_test_1.describe)('CharacterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NARUTO_CHARACTER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NARUTO_CHARACTER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NarutoCharacterSDK.test();
        const ent = testsdk.Character();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NARUTO_CHARACTER_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'character.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "debut": { "a": true, "h": "Debut", "n": "debut", "r": false, "t": "`$OBJECT`", "key$": "debut", "index$": 0 }, "family": { "a": true, "h": "Family", "n": "family", "r": false, "sh": "Character's family members and relationships", "t": "`$OBJECT`", "key$": "family", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the character", "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "images": { "a": true, "h": "Images", "n": "images", "r": false, "sh": "URLs to character images", "t": "`$ARRAY`", "key$": "images", "index$": 3 }, "jutsu": { "a": true, "h": "Jutsu", "n": "jutsu", "r": false, "sh": "List of jutsus the character can perform", "t": "`$ARRAY`", "key$": "jutsu", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Character's name", "t": "`$STRING`", "key$": "name", "index$": 5 }, "natureType": { "a": true, "h": "Nature Type", "n": "natureType", "r": false, "sh": "Character's chakra nature types", "t": "`$ARRAY`", "key$": "natureType", "index$": 6 }, "personal": { "a": true, "h": "Personal", "n": "personal", "r": false, "t": "`$OBJECT`", "key$": "personal", "index$": 7 }, "rank": { "a": true, "h": "Rank", "n": "rank", "r": false, "t": "`$OBJECT`", "key$": "rank", "index$": 8 }, "uniqueTraits": { "a": true, "h": "Unique Traits", "n": "uniqueTraits", "r": false, "sh": "Character's unique traits or abilities", "t": "`$ARRAY`", "key$": "uniqueTraits", "index$": 9 }, "voiceActors": { "a": true, "h": "Voice Actors", "n": "voiceActors", "r": false, "t": "`$OBJECT`", "key$": "voiceActors", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "character", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /character", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/character", "q": { "exist": ["limit", "name", "page"] }, "r": {}, "s": [{ "lit": "character" }], "t": { "req": "`reqdata`", "res": "`body.characters`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /character/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/character/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "character" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "character", "name__orig": "character", "Name": "Character", "name_": "character", "name-": "character", "NAME": "CHARACTER", "index$": 0 }, { "active": true, "entity": "character", "key$": "BasicCharacterFlow", "kind": "basic", "name": "BasicCharacterFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "character_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "character_ref01", "srcdatavar": "character_ref01_data", "suffix": "_dt0" }, "m": { "id": "character01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-character_ref01" } }], "index$": 1 }] }, 'Character', { "GET /character": { "protocol": "http", "operationId": "getAllCharacters", "responses": { "200": { "description": "Successful response with list of characters", "content": { "application/json": { "schema": { "type": "object", "properties": { "characters": { "items": { "properties": { "debut": { "properties": { "anime": { "description": "Anime episode debut", "type": "string" }, "appearsIn": { "description": "Media appearances", "type": "string" }, "game": { "description": "Game debut", "type": "string" }, "manga": { "description": "Manga chapter debut", "type": "string" }, "movie": { "description": "Movie debut", "type": "string" }, "novel": { "description": "Novel debut", "type": "string" }, "ova": { "description": "OVA debut", "type": "string" } }, "type": "object", "key$": "debut" }, "family": { "description": "Character's family members and relationships", "type": "object", "key$": "family" }, "id": { "description": "Unique identifier for the character", "type": "integer", "key$": "id" }, "images": { "description": "URLs to character images", "items": { "format": "uri", "type": "string" }, "type": "array", "key$": "images" }, "jutsu": { "description": "List of jutsus the character can perform", "items": { "type": "string" }, "type": "array", "key$": "jutsu" }, "name": { "description": "Character's name", "type": "string", "key$": "name" }, "natureType": { "description": "Character's chakra nature types", "items": { "type": "string" }, "type": "array", "key$": "natureType" }, "personal": { "properties": { "affiliation": { "description": "Villages or organizations the character is affiliated with", "items": { "type": "string" }, "type": "array" }, "age": { "description": "Character's age at different story points", "type": "object" }, "birthdate": { "description": "Character's birthdate", "type": "string" }, "bloodType": { "description": "Character's blood type", "type": "string" }, "clan": { "description": "Character's clan", "type": "string" }, "classification": { "description": "Character classification (e.g., Jinchūriki, Sage)", "items": { "type": "string" }, "type": "array" }, "height": { "description": "Character's height at different story points", "type": "object" }, "kekkeiGenkai": { "description": "Character's kekkei genkai abilities", "items": { "type": "string" }, "type": "array" }, "occupation": { "description": "Character's occupation(s)", "items": { "type": "string" }, "type": "array" }, "sex": { "description": "Character's gender", "type": "string" }, "tailedBeast": { "description": "Tailed beasts associated with the character", "items": { "type": "string" }, "type": "array" }, "team": { "description": "Teams the character belongs to", "items": { "type": "string" }, "type": "array" }, "weight": { "description": "Character's weight at different story points", "type": "object" } }, "type": "object", "key$": "personal" }, "rank": { "properties": { "ninjaRank": { "description": "Character's ninja rank at different story points", "type": "object" }, "ninjaRegistration": { "description": "Character's ninja registration number", "type": "string" } }, "type": "object", "key$": "rank" }, "uniqueTraits": { "description": "Character's unique traits or abilities", "items": { "type": "string" }, "type": "array", "key$": "uniqueTraits" }, "voiceActors": { "properties": { "english": { "description": "English voice actors", "items": { "type": "string" }, "type": "array" }, "japanese": { "description": "Japanese voice actors", "items": { "type": "string" }, "type": "array" } }, "type": "object", "key$": "voiceActors" } }, "type": "object", "x-ref": "#/components/schemas/Character", "index$": 0 }, "key$": "characters", "type": "array" }, "currentPage": { "key$": "currentPage", "type": "integer" }, "pageSize": { "key$": "pageSize", "type": "integer" }, "totalCharacters": { "key$": "totalCharacters", "type": "integer" } } } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of results per page", "required": false, "schema": { "type": "integer", "default": 20, "minimum": 1, "maximum": 100 }, "index$": 1 }, { "name": "name", "in": "query", "description": "Filter characters by name", "required": false, "schema": { "type": "string" }, "index$": 2 }], "securitySource": "unspecified" }, "GET /character/{id}": { "protocol": "http", "operationId": "getCharacterById", "responses": { "200": { "description": "Successful response with character details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Unique identifier for the character", "type": "integer", "key$": "id" }, "name": { "description": "Character's name", "type": "string", "key$": "name" }, "images": { "description": "URLs to character images", "items": { "format": "uri", "type": "string" }, "type": "array", "key$": "images" }, "debut": { "properties": { "anime": { "description": "Anime episode debut", "type": "string" }, "appearsIn": { "description": "Media appearances", "type": "string" }, "game": { "description": "Game debut", "type": "string" }, "manga": { "description": "Manga chapter debut", "type": "string" }, "movie": { "description": "Movie debut", "type": "string" }, "novel": { "description": "Novel debut", "type": "string" }, "ova": { "description": "OVA debut", "type": "string" } }, "type": "object", "key$": "debut" }, "personal": { "properties": { "affiliation": { "description": "Villages or organizations the character is affiliated with", "items": { "type": "string" }, "type": "array" }, "age": { "description": "Character's age at different story points", "type": "object" }, "birthdate": { "description": "Character's birthdate", "type": "string" }, "bloodType": { "description": "Character's blood type", "type": "string" }, "clan": { "description": "Character's clan", "type": "string" }, "classification": { "description": "Character classification (e.g., Jinchūriki, Sage)", "items": { "type": "string" }, "type": "array" }, "height": { "description": "Character's height at different story points", "type": "object" }, "kekkeiGenkai": { "description": "Character's kekkei genkai abilities", "items": { "type": "string" }, "type": "array" }, "occupation": { "description": "Character's occupation(s)", "items": { "type": "string" }, "type": "array" }, "sex": { "description": "Character's gender", "type": "string" }, "tailedBeast": { "description": "Tailed beasts associated with the character", "items": { "type": "string" }, "type": "array" }, "team": { "description": "Teams the character belongs to", "items": { "type": "string" }, "type": "array" }, "weight": { "description": "Character's weight at different story points", "type": "object" } }, "type": "object", "key$": "personal" }, "family": { "description": "Character's family members and relationships", "type": "object", "key$": "family" }, "rank": { "properties": { "ninjaRank": { "description": "Character's ninja rank at different story points", "type": "object" }, "ninjaRegistration": { "description": "Character's ninja registration number", "type": "string" } }, "type": "object", "key$": "rank" }, "jutsu": { "description": "List of jutsus the character can perform", "items": { "type": "string" }, "type": "array", "key$": "jutsu" }, "natureType": { "description": "Character's chakra nature types", "items": { "type": "string" }, "type": "array", "key$": "natureType" }, "uniqueTraits": { "description": "Character's unique traits or abilities", "items": { "type": "string" }, "type": "array", "key$": "uniqueTraits" }, "voiceActors": { "properties": { "english": { "description": "English voice actors", "items": { "type": "string" }, "type": "array" }, "japanese": { "description": "Japanese voice actors", "items": { "type": "string" }, "type": "array" } }, "type": "object", "key$": "voiceActors" } }, "x-ref": "#/components/schemas/Character", "index$": 0 } } } }, "404": { "description": "Character not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "statusCode": { "type": "integer", "description": "HTTP status code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "description": "Unique identifier of the character", "required": true, "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let character_ref01_data = Object.values(setup.data.existing.character)[0];
        // LIST
        const character_ref01_ent = client.Character();
        const character_ref01_match = {};
        const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e) => e.data());
        // LOAD
        const character_ref01_match_dt0 = {};
        character_ref01_match_dt0.id = character_ref01_data.id;
        const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data();
        (0, node_assert_1.default)(character_ref01_data_dt0.id === character_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/character/CharacterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NarutoCharacterSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['character01', 'character02', 'character03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NARUTO_CHARACTER_TEST_CHARACTER_ENTID': idmap,
        'NARUTO_CHARACTER_TEST_LIVE': 'FALSE',
        'NARUTO_CHARACTER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NARUTO_CHARACTER_TEST_CHARACTER_ENTID'];
    const live = 'TRUE' === env.NARUTO_CHARACTER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NARUTO_CHARACTER_TEST_CHARACTER_ENTID'];
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
//# sourceMappingURL=CharacterEntity.test.js.map