"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'NarutoCharacter',
        slug: "naruto-character",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://narutodb.xyz/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            character: {},
            clan: {},
        }
    };
    entity = {
        "character": {
            "fields": [
                {
                    "name": "debut",
                    "title": "Debut",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "family",
                    "title": "Family",
                    "type": "`$OBJECT`",
                    "short": "Character's family members and relationships"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the character"
                },
                {
                    "name": "images",
                    "title": "Images",
                    "type": "`$ARRAY`",
                    "short": "URLs to character images"
                },
                {
                    "name": "jutsu",
                    "title": "Jutsu",
                    "type": "`$ARRAY`",
                    "short": "List of jutsus the character can perform"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Character's name"
                },
                {
                    "name": "natureType",
                    "title": "Nature Type",
                    "type": "`$ARRAY`",
                    "short": "Character's chakra nature types"
                },
                {
                    "name": "personal",
                    "title": "Personal",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rank",
                    "title": "Rank",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "uniqueTraits",
                    "title": "Unique Traits",
                    "type": "`$ARRAY`",
                    "short": "Character's unique traits or abilities"
                },
                {
                    "name": "voiceActors",
                    "title": "Voice Actors",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "character",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/character",
                            "segments": [
                                {
                                    "lit": "character"
                                }
                            ],
                            "parts": [
                                "character"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.characters`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "name",
                                    "page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/character/{id}",
                            "segments": [
                                {
                                    "lit": "character"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "character",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "clan": {
            "fields": [
                {
                    "name": "characters",
                    "title": "Characters",
                    "type": "`$ARRAY`",
                    "short": "List of characters belonging to this clan"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the clan"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Clan name"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "clan",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/clan",
                            "segments": [
                                {
                                    "lit": "clan"
                                }
                            ],
                            "parts": [
                                "clan"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.clans`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map