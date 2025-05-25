import { useEffect, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { Portal } from '../Portal'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const toastVariants = cva(
  [
    'relative flex items-start gap-3 rounded-lg p-4 shadow-lg border transition-all duration-300',
    'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
    'max-w-sm w-full pointer-events-auto',
  ],
  {
    variants: {
      type: {
        success: 'border-green-200 dark:border-green-800',
        error: 'border-red-200 dark:border-red-800',
        warning: 'border-amber-200 dark:border-amber-800',
        info: 'border-blue-200 dark:border-blue-800',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
)

const iconVariants = cva('h-5 w-5 flex-shrink-0 mt-0.5', {
  variants: {
    type: {
      success: 'text-green-500 dark:text-green-400',
      error: 'text-red-500 dark:text-red-400',
      warning: 'text-amber-500 dark:text-amber-400',
      info: 'text-blue-500 dark:text-blue-400',
    },
  },
  defaultVariants: {
    type: 'info',
  },
})

// Toast单独使用时的位置样式
const standalonePositionVariants = cva('fixed z-50 pointer-events-none', {
  variants: {
    position: {
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 -translate-x-1/2',
      'top-right': 'top-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
    },
  },
  defaultVariants: {
    position: 'top-right',
  },
})

export interface ToastProps extends VariantProps<typeof toastVariants> {
  /** Toast的唯一标识 */
  id?: string
  /** Toast标题 */
  title?: string
  /** Toast描述内容 */
  description?: string
  /** Toast类型 */
  type?: 'success' | 'error' | 'warning' | 'info'
  /** 显示位置（仅在单独使用时有效） */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  /** 自动关闭延迟时间（毫秒），设为0则不自动关闭 */
  duration?: number
  /** 是否可手动关闭 */
  closable?: boolean
  /** 关闭回调 */
  onClose?: () => void
  /** 自定义图标 */
  icon?: React.ReactNode
  /** 自定义操作按钮 */
  action?: React.ReactNode
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
  /** 是否显示 */
  open?: boolean
  /** 是否在容器中使用（内部属性） */
  _inContainer?: boolean
}

const typeIcons = {
  success: CheckCircleIcon,
  error: XCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
}

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  type = 'info',
  position = 'top-right',
  duration = 5000,
  closable = true,
  onClose,
  icon,
  action,
  className,
  style,
  open = true,
  _inContainer = false,
}) => {
  const [visible, setVisible] = useState(open)
  const [mounted, setMounted] = useState(false)

  // 挂载动画
  useEffect(() => {
    if (open) {
      setVisible(true)
      // 延迟一帧来触发过渡动画
      const timer = setTimeout(() => setMounted(true), 10)
      return () => clearTimeout(timer)
    } else {
      setMounted(false)
      const timer = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [open])

  // 自动关闭
  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [open, duration])

  const handleClose = () => {
    setMounted(false)
    setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, 300)
  }

  if (!visible) {
    return null
  }

  const IconComponent = icon ? null : typeIcons[type]

  // Toast内容组件
  const ToastContent = (
    <div
      className={cn(
        toastVariants({ type }),
        'transform transition-all duration-300 ease-out',
        mounted
          ? 'translate-x-0 opacity-100 scale-100'
          : _inContainer
          ? 'translate-y-2 opacity-0 scale-95'
          : position.includes('right')
          ? 'translate-x-full opacity-0 scale-95'
          : position.includes('left')
          ? '-translate-x-full opacity-0 scale-95'
          : position.includes('top')
          ? '-translate-y-full opacity-0 scale-95'
          : 'translate-y-full opacity-0 scale-95',
        className
      )}
      style={style}
      role="alert"
      aria-live="polite"
      data-testid={id ? `toast-${id}` : 'toast'}
    >
      {/* 图标 */}
      {(icon || IconComponent) && (
        <div className="flex-shrink-0">
          {icon || (IconComponent && <IconComponent className={cn(iconVariants({ type }))} />)}
        </div>
      )}

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        {title && (
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </div>
        )}
      </div>

      {/* 操作区域 */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {action}
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className={cn(
              'inline-flex items-center justify-center rounded-md p-1.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
              'transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
            aria-label="关闭"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )

  // 如果在容器中使用，直接返回Toast内容
  if (_inContainer) {
    return ToastContent
  }

  // 单独使用时，需要Portal和位置样式
  return (
    <Portal containerSelector="#toast-root" cleanupOnUnmount={false}>
      <div className={cn(standalonePositionVariants({ position }))}>
        {ToastContent}
      </div>
    </Portal>
  )
}

Toast.displayName = 'Toast'

export { Toast, toastVariants } 