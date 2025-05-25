import { useEffect } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { Portal } from '../Portal'
import { Toast, type ToastProps } from './Toast'

export interface ToastItem extends Omit<ToastProps, 'open' | 'onClose' | '_inContainer'> {
  id: string
}

export interface ToastContainerProps {
  /** Toast列表 */
  toasts: ToastItem[]
  /** 移除Toast的回调 */
  onRemove: (id: string) => void
  /** 容器位置 */
  position?: ToastProps['position']
  /** 容器的最大Toast数量 */
  maxToasts?: number
  /** 容器间距 */
  gap?: number
}

// 容器位置样式
const containerPositionVariants = cva('fixed z-50 pointer-events-none flex', {
  variants: {
    position: {
      'top-left': 'top-4 left-4 flex-col',
      'top-center': 'top-4 left-1/2 -translate-x-1/2 flex-col',
      'top-right': 'top-4 right-4 flex-col',
      'bottom-left': 'bottom-4 left-4 flex-col-reverse',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse',
      'bottom-right': 'bottom-4 right-4 flex-col-reverse',
    },
  },
  defaultVariants: {
    position: 'top-right',
  },
})

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
  position = 'top-right',
  maxToasts = 6,
  gap = 8,
}) => {
  // 限制最大Toast数量
  const visibleToasts = toasts.slice(0, maxToasts)

  // 创建toast-root容器
  useEffect(() => {
    if (!document.getElementById('toast-root')) {
      const toastRoot = document.createElement('div')
      toastRoot.id = 'toast-root'
      toastRoot.className = 'fixed inset-0 z-50 pointer-events-none'
      document.body.appendChild(toastRoot)
    }
  }, [])

  if (visibleToasts.length === 0) {
    return null
  }

  return (
    <Portal containerSelector="#toast-root">
      <div 
        className={cn(containerPositionVariants({ position }))}
        style={{
          gap: `${gap}px`,
        }}
      >
        {visibleToasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            open={true}
            onClose={() => onRemove(toast.id)}
            _inContainer={true}
          />
        ))}
      </div>
    </Portal>
  )
}

ToastContainer.displayName = 'ToastContainer'

export { ToastContainer } 