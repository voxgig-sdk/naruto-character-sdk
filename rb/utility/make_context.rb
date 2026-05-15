# NarutoCharacter SDK utility: make_context
require_relative '../core/context'
module NarutoCharacterUtilities
  MakeContext = ->(ctxmap, basectx) {
    NarutoCharacterContext.new(ctxmap, basectx)
  }
end
