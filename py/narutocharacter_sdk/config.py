# NarutoCharacter SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NarutoCharacter",
            "slug": "naruto-character",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://narutodb.xyz/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "clan": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "debut",
            "title": "Debut",
            "type": "`$OBJECT`",
          },
          {
            "name": "family",
            "title": "Family",
            "type": "`$OBJECT`",
            "short": "Character's family members and relationships",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the character",
          },
          {
            "name": "images",
            "title": "Images",
            "type": "`$ARRAY`",
            "short": "URLs to character images",
          },
          {
            "name": "jutsu",
            "title": "Jutsu",
            "type": "`$ARRAY`",
            "short": "List of jutsus the character can perform",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Character's name",
          },
          {
            "name": "natureType",
            "title": "Nature Type",
            "type": "`$ARRAY`",
            "short": "Character's chakra nature types",
          },
          {
            "name": "personal",
            "title": "Personal",
            "type": "`$OBJECT`",
          },
          {
            "name": "rank",
            "title": "Rank",
            "type": "`$OBJECT`",
          },
          {
            "name": "uniqueTraits",
            "title": "Unique Traits",
            "type": "`$ARRAY`",
            "short": "Character's unique traits or abilities",
          },
          {
            "name": "voiceActors",
            "title": "Voice Actors",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "character",
                  },
                ],
                "parts": [
                  "character",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.characters`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
              },
            ],
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
                    "lit": "character",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "character",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "clan": {
        "fields": [
          {
            "name": "characters",
            "title": "Characters",
            "type": "`$ARRAY`",
            "short": "List of characters belonging to this clan",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the clan",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Clan name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "clan",
                  },
                ],
                "parts": [
                  "clan",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.clans`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
