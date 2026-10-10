/**
 * Shared, framework-agnostic helpers.
 * Keep pure functions here so they are easy to reuse and unit test.
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
