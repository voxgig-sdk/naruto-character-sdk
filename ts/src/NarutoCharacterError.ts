
import { Context } from './Context'


class NarutoCharacterError extends Error {

  isNarutoCharacterError = true

  sdk = 'NarutoCharacter'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NarutoCharacterError
}

