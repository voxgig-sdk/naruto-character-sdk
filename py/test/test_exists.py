# ProjectName SDK exists test

import pytest
from narutocharacter_sdk import NarutoCharacterSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NarutoCharacterSDK.test(None, None)
        assert testsdk is not None
