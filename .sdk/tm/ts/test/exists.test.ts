
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NarutoCharacterSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NarutoCharacterSDK.test()
    equal(testsdk instanceof NarutoCharacterSDK, true,
      'NarutoCharacterSDK.test() must return a client synchronously')
  })

})
