
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NarutoCharacterSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NarutoCharacterSDK.test()
    equal(null !== testsdk, true)
  })

})
