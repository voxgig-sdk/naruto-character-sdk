# NarutoCharacter SDK feature factory

from feature.base_feature import NarutoCharacterBaseFeature
from feature.test_feature import NarutoCharacterTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NarutoCharacterBaseFeature(),
        "test": lambda: NarutoCharacterTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
