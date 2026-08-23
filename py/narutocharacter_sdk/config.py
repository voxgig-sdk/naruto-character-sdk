# NarutoCharacter SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$OBJECT`",
          },
          {
            "name": "family",
            "short": "Character's family members and relationships",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the character",
            "type": "`$INTEGER`",
          },
          {
            "name": "images",
            "short": "URLs to character images",
            "type": "`$ARRAY`",
          },
          {
            "name": "jutsu",
            "short": "List of jutsus the character can perform",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "short": "Character's name",
            "type": "`$STRING`",
          },
          {
            "name": "natureType",
            "short": "Character's chakra nature types",
            "type": "`$ARRAY`",
          },
          {
            "name": "personal",
            "type": "`$OBJECT`",
          },
          {
            "name": "rank",
            "type": "`$OBJECT`",
          },
          {
            "name": "uniqueTraits",
            "short": "Character's unique traits or abilities",
            "type": "`$ARRAY`",
          },
          {
            "name": "voiceActors",
            "type": "`$OBJECT`",
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/character",
                "parts": [
                  "character",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "name",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.characters`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/character/{id}",
                "parts": [
                  "character",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "List of characters belonging to this clan",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the clan",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "short": "Clan name",
            "type": "`$STRING`",
          },
        ],
        "name": "clan",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/clan",
                "parts": [
                  "clan",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.clans`",
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
