# NarutoCharacter SDK utility: make_context

from projectname_sdk.core.context import NarutoCharacterContext


def make_context_util(ctxmap, basectx):
    return NarutoCharacterContext(ctxmap, basectx)
