/** @since 0.0.4 */

import * as O from 'fp-ts/Option'
import * as RR from 'fp-ts/ReadonlyRecord'
import { pipe } from 'fp-ts/function'

// -----------------------------------------------------------------------------
// Record
// -----------------------------------------------------------------------------

/**
 * Lookup a property in a nested Record
 *
 * @since 0.0.4
 * @category Record
 * @example
 *   import { Record } from '@xmaho/utility-ts'
 *   import * as O from 'fp-ts/Option'
 *
 *   assert.deepStrictEqual(Record.lookup2('a')('b')({a: {b: 'hello'}}), O.some('hello'))
 */
export const lookup2 =
  (k1: string) =>
  (k2: string) =>
  <A>(a: Record<string, Record<string, A>>) =>
    pipe(a, RR.lookup(k1), O.flatMap(RR.lookup(k2)))
