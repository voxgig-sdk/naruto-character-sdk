# NarutoCharacter SDK utility: make_context

from narutocharacter_sdk.core.context import NarutoCharacterContext


def make_context_util(ctxmap, basectx):
    return NarutoCharacterContext(ctxmap, basectx)
