/**
 * Merge class names. Add clsx + tailwind-merge when you need conditional or conflicting Tailwind classes.
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
