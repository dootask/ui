import React, { forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils/cn'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 是否显示模态框 */
  open?: boolean
  /** 关闭模态框的回调 */
  onClose?: () => void
  /** 模态框标题 */
  title?: string
  /** 模态框尺寸 */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** 点击遮罩层是否关闭 */
  closeOnOverlayClick?: boolean
  /** 按 ESC 键是否关闭 */
  closeOnEscape?: boolean
  /** 是否显示关闭按钮 */
  showCloseButton?: boolean
  /** 自定义关闭按钮 */
  closeButton?: React.ReactNode
  /** 是否居中显示 */
  centered?: boolean
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onClose,
      title,
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      closeButton,
      centered = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // ESC 键关闭
    useEffect(() => {
      if (!open || !closeOnEscape) return

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose?.()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, closeOnEscape, onClose])

    // 防止页面滚动
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden'
        return () => {
          document.body.style.overflow = 'unset'
        }
      }
    }, [open])

    // 点击遮罩层关闭
    const handleOverlayClick = (event: React.MouseEvent) => {
      if (closeOnOverlayClick && event.target === event.currentTarget) {
        onClose?.()
      }
    }

    // 尺寸样式
    const sizeClasses = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full m-4'
    }

    if (!open) return null

    const modalContent = (
      <div
        className={cn(
          // 遮罩层
          'fixed inset-0 z-50 flex',
          centered ? 'items-center justify-center' : 'items-start justify-center pt-16',
          'bg-black bg-opacity-50 backdrop-blur-sm'
        )}
        onClick={handleOverlayClick}
      >
        <div
          ref={ref}
          className={cn(
            // 模态框容器
            'relative bg-white rounded-lg shadow-xl',
            'w-full mx-4 my-8',
            sizeClasses[size],
            'animate-in fade-in-0 zoom-in-95',
            'duration-200',
            'dark:bg-slate-900 dark:border dark:border-slate-700',
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {/* 头部 */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              {title && (
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  aria-label="关闭"
                >
                  {closeButton || <XMarkIcon className="w-5 h-5" />}
                </button>
              )}
            </div>
          )}

          {/* 内容区域 */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    )

    // 使用 Portal 渲染到 body
    return createPortal(modalContent, document.body)
  }
)

Modal.displayName = 'Modal'

export { Modal } 