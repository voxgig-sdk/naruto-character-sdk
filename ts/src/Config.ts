
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'NarutoCharacter',
        slug: "naruto-character",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://narutodb.xyz/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      clan: {
      },

    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "debut",
          "type": "`$OBJECT`"
        },
        {
          "name": "family",
          "short": "Character's family members and relationships",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the character",
          "type": "`$INTEGER`"
        },
        {
          "name": "images",
          "short": "URLs to character images",
          "type": "`$ARRAY`"
        },
        {
          "name": "jutsu",
          "short": "List of jutsus the character can perform",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "short": "Character's name",
          "type": "`$STRING`"
        },
        {
          "name": "natureType",
          "short": "Character's chakra nature types",
          "type": "`$ARRAY`"
        },
        {
          "name": "personal",
          "type": "`$OBJECT`"
        },
        {
          "name": "rank",
          "type": "`$OBJECT`"
        },
        {
          "name": "uniqueTraits",
          "short": "Character's unique traits or abilities",
          "type": "`$ARRAY`"
        },
        {
          "name": "voiceActors",
          "type": "`$OBJECT`"
        }
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "parts": [
                "character"
              ],
              "select": {
                "exist": [
                  "limit",
                  "name",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.characters`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character/{id}",
              "parts": [
                "character",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
          "short": "List of characters belonging to this clan",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the clan",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Clan name",
          "type": "`$STRING`"
        }
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clan",
              "parts": [
                "clan"
              ],
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.clans`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

