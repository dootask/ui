import { clsx, type ClassValue } from 'clsx'

/**
 * Utility function to merge class names
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
} 