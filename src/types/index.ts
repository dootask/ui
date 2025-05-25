export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type Variant = 'solid' | 'outline' | 'ghost' | 'soft' | 'plain'

export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface ComponentProps extends BaseProps {
  size?: Size
  color?: Color
  variant?: Variant
  disabled?: boolean
  loading?: boolean
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

// Theme colors
export type ThemeColor = 
  | 'mantis' 
  | 'primary' 
  | 'gray' 
  | 'red' 
  | 'orange' 
  | 'amber' 
  | 'yellow' 
  | 'lime' 
  | 'green' 
  | 'emerald' 
  | 'teal' 
  | 'cyan' 
  | 'sky' 
  | 'blue' 
  | 'indigo' 
  | 'violet' 
  | 'purple' 
  | 'fuchsia' 
  | 'pink' 
  | 'rose'

// Component specific types
export interface ButtonProps extends ComponentProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export interface InputProps extends ComponentProps {
  type?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  label?: string
  required?: boolean
}

export interface CardProps extends BaseProps {
  padding?: Size
  shadow?: Size
  rounded?: Size
  bordered?: boolean
  hoverable?: boolean
}

export interface ModalProps extends BaseProps {
  open?: boolean
  onClose?: () => void
  title?: string
  size?: Size
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export interface ToastProps extends BaseProps {
  type?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message?: string
  duration?: number
  onClose?: () => void
  action?: React.ReactNode
}

export interface LoadingProps extends BaseProps {
  size?: Size
  color?: ThemeColor
  text?: string
} 