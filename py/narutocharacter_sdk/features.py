# NarutoCharacter SDK feature factory

from narutocharacter_sdk.feature.base_feature import NarutoCharacterBaseFeature
from narutocharacter_sdk.feature.ratelimit_feature import NarutoCharacterRatelimitFeature
from narutocharacter_sdk.feature.retry_feature import NarutoCharacterRetryFeature
from narutocharacter_sdk.feature.test_feature import NarutoCharacterTestFeature
from narutocharacter_sdk.feature.timeout_feature import NarutoCharacterTimeoutFeature


_FEATURES = {
    "base": lambda: NarutoCharacterBaseFeature(),
    "ratelimit": lambda: NarutoCharacterRatelimitFeature(),
    "retry": lambda: NarutoCharacterRetryFeature(),
    "test": lambda: NarutoCharacterTestFeature(),
    "timeout": lambda: NarutoCharacterTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
