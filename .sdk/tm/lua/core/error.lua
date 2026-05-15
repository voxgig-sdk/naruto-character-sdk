-- NarutoCharacter SDK error

local NarutoCharacterError = {}
NarutoCharacterError.__index = NarutoCharacterError


function NarutoCharacterError.new(code, msg, ctx)
  local self = setmetatable({}, NarutoCharacterError)
  self.is_sdk_error = true
  self.sdk = "NarutoCharacter"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NarutoCharacterError:error()
  return self.msg
end


function NarutoCharacterError:__tostring()
  return self.msg
end


return NarutoCharacterError
