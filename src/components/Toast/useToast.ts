import { useState, useCallback } from 'react'
import type { ToastProps } from './Toast'
import type { ToastItem } from './ToastContainer'

let toastCounter = 0

const generateToastId = () => `toast-${++toastCounter}`

export interface UseToastOptions {
  /** 默认自动关闭时间 */
  defaultDuration?: number
  /** 默认位置 */
  defaultPosition?: ToastProps['position']
  /** 最大Toast数量 */
  maxToasts?: number
}

export interface UseToastReturn {
  /** Toast列表 */
  toasts: ToastItem[]
  /** 显示成功Toast */
  success: (message: string, options?: Partial<ToastProps>) => string
  /** 显示错误Toast */
  error: (message: string, options?: Partial<ToastProps>) => string
  /** 显示警告Toast */
  warning: (message: string, options?: Partial<ToastProps>) => string
  /** 显示信息Toast */
  info: (message: string, options?: Partial<ToastProps>) => string
  /** 显示自定义Toast */
  toast: (options: Omit<ToastProps, 'open' | 'onClose'> & { id?: string }) => string
  /** 移除Toast */
  remove: (id: string) => void
  /** 清空所有Toast */
  clear: () => void
  /** 更新Toast */
  update: (id: string, options: Partial<ToastProps>) => void
}

export const useToast = (options: UseToastOptions = {}): UseToastReturn => {
  const {
    defaultDuration = 5000,
    defaultPosition = 'top-right',
    maxToasts = 6,
  } = options

  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = useCallback((toastOptions: Omit<ToastProps, 'open' | 'onClose'> & { id?: string }) => {
    const id = toastOptions.id || generateToastId()
    
    const newToast: ToastItem = {
      ...toastOptions,
      id,
      position: toastOptions.position || defaultPosition,
      duration: toastOptions.duration ?? defaultDuration,
    }

    setToasts((prev) => {
      const filtered = prev.filter(t => t.id !== id) // 移除相同ID的Toast
      const newToasts = [newToast, ...filtered]
      return newToasts.slice(0, maxToasts) // 限制最大数量
    })

    return id
  }, [defaultDuration, defaultPosition, maxToasts])

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const clear = useCallback(() => {
    setToasts([])
  }, [])

  const update = useCallback((id: string, options: Partial<ToastProps>) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, ...options } : toast
      )
    )
  }, [])

  const success = useCallback((message: string, options: Partial<ToastProps> = {}) => {
    return addToast({
      ...options,
      type: 'success',
      description: options.description || message,
      title: options.title || '成功',
    })
  }, [addToast])

  const error = useCallback((message: string, options: Partial<ToastProps> = {}) => {
    return addToast({
      ...options,
      type: 'error',
      description: options.description || message,
      title: options.title || '错误',
      duration: options.duration ?? 8000, // 错误消息显示更长时间
    })
  }, [addToast])

  const warning = useCallback((message: string, options: Partial<ToastProps> = {}) => {
    return addToast({
      ...options,
      type: 'warning',
      description: options.description || message,
      title: options.title || '警告',
    })
  }, [addToast])

  const info = useCallback((message: string, options: Partial<ToastProps> = {}) => {
    return addToast({
      ...options,
      type: 'info',
      description: options.description || message,
      title: options.title || '提示',
    })
  }, [addToast])

  const toast = useCallback((toastOptions: Omit<ToastProps, 'open' | 'onClose'> & { id?: string }) => {
    return addToast(toastOptions)
  }, [addToast])

  return {
    toasts,
    success,
    error,
    warning,
    info,
    toast,
    remove,
    clear,
    update,
  }
} 