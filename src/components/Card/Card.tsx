import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { cardVariants } from '@/utils/variants'

export interface CardComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bordered?: boolean
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardComponentProps>(
  (
    {
      className,
      padding = 'md',
      shadow = 'sm',
      rounded = 'md',
      bordered = true,
      hoverable = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ padding, shadow, rounded, bordered, hoverable }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card } 