/** @since 0.0.3 */

import * as O from 'fp-ts/Option'
import { Option } from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

// -----------------------------------------------------------------------------
// convert
// -----------------------------------------------------------------------------

/**
 * It converts a string to a number with a given radix
 *
 * @since 0.0.3
 * @category convert
 * @example
 *   import { convert } from '@xmaho/utility-ts'
 *   assert.deepStrictEqual(convert.parseInt(10)('1'), O.some(1))
 */
export const parseInt =
  (radix: number) =>
  (s: string): Option<number> =>
    pipe(Number.parseInt(s, radix), O.fromPredicate(Number.isFinite))
