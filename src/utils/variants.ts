import { cva } from 'class-variance-authority'

// Button variants
export const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-1 bg-transparent',
        ghost: 'bg-transparent hover:bg-opacity-10',
        soft: 'bg-opacity-10',
        plain: 'bg-transparent border-0 shadow-none'
      },
      color: {
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        error: '',
        info: ''
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-10 px-6 text-base',
        xl: 'h-11 px-8 text-base'
      }
    },
    compoundVariants: [
      // Primary solid
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
      },
      // Primary outline
      {
        variant: 'outline',
        color: 'primary',
        class: 'border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary-950 dark:active:bg-primary-900'
      },
      // Primary ghost
      {
        variant: 'ghost',
        color: 'primary',
        class: 'text-primary-600 hover:bg-primary-100 active:bg-primary-200 dark:hover:bg-primary-900 dark:active:bg-primary-800'
      },
      // Primary soft
      {
        variant: 'soft',
        color: 'primary',
        class: 'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 dark:bg-primary-900 dark:text-primary-300 dark:hover:bg-primary-800 dark:active:bg-primary-700'
      },
      // Primary plain
      {
        variant: 'plain',
        color: 'primary',
        class: 'text-primary-600 hover:text-primary-700 active:text-primary-800'
      },
      // Success variants
      {
        variant: 'solid',
        color: 'success',
        class: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 dark:hover:bg-green-950 dark:active:bg-green-900'
      },
      // Error variants
      {
        variant: 'solid',
        color: 'error',
        class: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
      },
      {
        variant: 'outline',
        color: 'error',
        class: 'border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 dark:hover:bg-red-950 dark:active:bg-red-900'
      },
      // Warning variants
      {
        variant: 'solid',
        color: 'warning',
        class: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800'
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'border-amber-600 text-amber-600 hover:bg-amber-50 active:bg-amber-100 dark:hover:bg-amber-950 dark:active:bg-amber-900'
      },
      // Info variants
      {
        variant: 'solid',
        color: 'info',
        class: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 dark:hover:bg-blue-950 dark:active:bg-blue-900'
      }
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md'
    }
  }
)

// Input variants
export const inputVariants = cva(
  'flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-400',
  {
    variants: {
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-2 text-sm',
        md: 'h-9 px-3 text-sm',
        lg: 'h-10 px-3 text-base',
        xl: 'h-11 px-4 text-base'
      },
      error: {
        true: 'border-red-500 focus:border-red-500 focus:ring-red-500'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

// Card variants
export const cardVariants = cva(
  'bg-white rounded-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-700',
  {
    variants: {
      padding: {
        xs: 'p-2',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8'
      },
      shadow: {
        xs: 'shadow-xs',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl'
      },
      rounded: {
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl'
      },
      bordered: {
        true: 'border',
        false: 'border-0'
      },
      hoverable: {
        true: 'transition-shadow duration-200 hover:shadow-lg cursor-pointer'
      }
    },
    defaultVariants: {
      padding: 'md',
      shadow: 'sm',
      rounded: 'md',
      bordered: true
    }
  }
) 