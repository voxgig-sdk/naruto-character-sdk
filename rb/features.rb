# NarutoCharacter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NarutoCharacterFeatures
  def self.make_feature(name)
    case name
    when "base"
      NarutoCharacterBaseFeature.new
    when "ratelimit"
      NarutoCharacterRatelimitFeature.new
    when "retry"
      NarutoCharacterRetryFeature.new
    when "test"
      NarutoCharacterTestFeature.new
    when "timeout"
      NarutoCharacterTimeoutFeature.new
    else
      NarutoCharacterBaseFeature.new
    end
  end
end
