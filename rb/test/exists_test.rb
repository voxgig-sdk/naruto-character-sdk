# NarutoCharacter SDK exists test

require "minitest/autorun"
require_relative "../NarutoCharacter_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NarutoCharacterSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
