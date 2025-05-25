import React, { forwardRef } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { buttonVariants } from '@/utils/variants'

export interface ButtonComponentProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonComponentProps>(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      color = 'primary',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          buttonVariants({ variant, size, color }),
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
            {children && <span>加载中...</span>}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </div>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 