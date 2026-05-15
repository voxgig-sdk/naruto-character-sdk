# NarutoCharacter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NarutoCharacterFeatures
  def self.make_feature(name)
    case name
    when "base"
      NarutoCharacterBaseFeature.new
    when "test"
      NarutoCharacterTestFeature.new
    else
      NarutoCharacterBaseFeature.new
    end
  end
end
