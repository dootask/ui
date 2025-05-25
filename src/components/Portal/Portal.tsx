import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  /** 要渲染的子元素 */
  children: React.ReactNode
  /** 目标容器，默认为 document.body */
  container?: Element | null
  /** 自定义容器选择器 */
  containerSelector?: string
  /** 是否在组件销毁时清理容器 */
  cleanupOnUnmount?: boolean
}

const Portal: React.FC<PortalProps> = ({
  children,
  container,
  containerSelector,
  cleanupOnUnmount = false,
}) => {
  const [mountNode, setMountNode] = useState<Element | null>(null)

  useEffect(() => {
    let targetContainer: Element | null = null

    // 优先级：传入的container > containerSelector > document.body
    if (container) {
      targetContainer = container
    } else if (containerSelector) {
      targetContainer = document.querySelector(containerSelector)
    } else {
      targetContainer = document.body
    }

    // 如果没有找到容器且指定了selector，创建一个默认容器
    if (!targetContainer && containerSelector) {
      const div = document.createElement('div')
      div.id = containerSelector.replace('#', '').replace('.', '')
      document.body.appendChild(div)
      targetContainer = div
    }

    setMountNode(targetContainer)

    // 清理函数
    return () => {
      if (cleanupOnUnmount && targetContainer && targetContainer !== document.body) {
        targetContainer.remove()
      }
    }
  }, [container, containerSelector, cleanupOnUnmount])

  // 如果没有挂载节点，不渲染任何内容
  if (!mountNode) {
    return null
  }

  return createPortal(children, mountNode)
}

Portal.displayName = 'Portal'

export { Portal } 