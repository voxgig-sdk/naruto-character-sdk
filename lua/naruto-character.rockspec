package = "voxgig-sdk-naruto-character"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/naruto-character-sdk.git"
}
description = {
  summary = "NarutoCharacter SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["naruto-character_sdk"] = "naruto-character_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
