import * as fc from 'fast-check'
import * as structLib from '../src/struct'

describe('lookup struct', () => {
  it('lookup a property', () => {
    fc.assert(
      fc.property(fc.string(), (someword) => {
        expect(structLib.get('a')({ a: someword })).toBe(someword)
      })
    )
  })
})
