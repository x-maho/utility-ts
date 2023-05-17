/** @since 0.0.1 */

// -----------------------------------------------------------------------------
// struct
// -----------------------------------------------------------------------------

/**
 * It's a lookup property in an struct with type safety
 *
 * @since 0.0.1
 * @category struct
 * @example
 *   import { lookup } from '@xmaho&#x2F;utility-ts'
 *   assert.deepStrictEqual(lookup('a')({a: 'hello'}), 'hello')
 */
export const lookup =
  <K extends string | number | symbol>(path: K) =>
  <A>(obj: { [P in K]: A }): A => {
    return obj[path]
  }
