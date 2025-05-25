import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toast, ToastContainer, useToast } from '../src/components/Toast'
import { Button } from '../src/components/Button'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '轻量级的消息提示组件，支持多种类型、位置和自动关闭功能。',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast类型',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: '显示位置',
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: '自动关闭时间（毫秒），0表示不自动关闭',
    },
    closable: {
      control: 'boolean',
      description: '是否可手动关闭',
    },
    open: {
      control: 'boolean',
      description: '是否显示',
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

// 基础示例
export const Default: Story = {
  args: {
    title: '提示',
    description: '这是一条基础的提示消息',
    type: 'info',
    position: 'top-right',
    duration: 0,
    closable: true,
    open: true,
  },
}

// 不同类型
export const Types: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <Toast
        type="success"
        title="成功"
        description="操作已成功完成"
        open={true}
        duration={0}
        position="top-left"
      />
      <Toast
        type="error"
        title="错误"
        description="操作失败，请重试"
        open={true}
        duration={0}
        position="top-left"
        style={{ transform: 'translateY(80px)' }}
      />
      <Toast
        type="warning"
        title="警告"
        description="请注意检查输入内容"
        open={true}
        duration={0}
        position="top-left"
        style={{ transform: 'translateY(160px)' }}
      />
      <Toast
        type="info"
        title="提示"
        description="这是一条信息提示"
        open={true}
        duration={0}
        position="top-left"
        style={{ transform: 'translateY(240px)' }}
      />
    </div>
  ),
}

// 不同位置（单独使用Toast组件）
export const Positions: Story = {
  render: () => (
    <>
      <Toast
        description="左上角（单独Toast）"
        position="top-left"
        open={true}
        duration={0}
      />
      <Toast
        description="顶部居中（单独Toast）"
        position="top-center"
        open={true}
        duration={0}
      />
      <Toast
        description="右上角（单独Toast）"
        position="top-right"
        open={true}
        duration={0}
      />
      <Toast
        description="左下角（单独Toast）"
        position="bottom-left"
        open={true}
        duration={0}
      />
      <Toast
        description="底部居中（单独Toast）"
        position="bottom-center"
        open={true}
        duration={0}
      />
      <Toast
        description="右下角（单独Toast）"
        position="bottom-right"
        open={true}
        duration={0}
      />
    </>
  ),
}

// 自定义图标
export const CustomIcon: Story = {
  args: {
    title: '自定义图标',
    description: '使用自定义图标的Toast',
    icon: <span style={{ fontSize: '20px' }}>🎉</span>,
    open: true,
    duration: 0,
  },
}

// 自定义操作
export const CustomAction: Story = {
  args: {
    title: '网络错误',
    description: '连接服务器失败，请检查网络连接',
    type: 'error',
    action: <Button size="sm" variant="outline">重试</Button>,
    open: true,
    duration: 0,
  },
}

// 只有描述
export const DescriptionOnly: Story = {
  args: {
    description: '这是一条只有描述内容的Toast消息',
    open: true,
    duration: 0,
  },
}

// 不可关闭
export const NotClosable: Story = {
  args: {
    title: '系统维护',
    description: '系统正在维护中，请稍后再试',
    type: 'warning',
    closable: false,
    open: true,
    duration: 0,
  },
}

// useToast Hook示例
const ToastDemo = () => {
  const {
    toasts,
    success,
    error,
    warning,
    info,
    remove,
    clear,
    toast,
  } = useToast({
    defaultPosition: 'top-right',
    maxToasts: 5,
  })

  return (
    <div className="p-8 space-y-4">
      <div className="space-x-4">
        <Button onClick={() => success('操作成功完成!')}>
          成功
        </Button>
        <Button onClick={() => error('操作失败，请重试')}>
          错误
        </Button>
        <Button onClick={() => warning('请注意输入格式')}>
          警告
        </Button>
        <Button onClick={() => info('这是一条信息提示')}>
          信息
        </Button>
      </div>
      
      <div className="space-x-4">
        <Button 
          variant="outline"
          onClick={() => toast({
            title: '自定义Toast',
            description: '这是一个自定义的Toast消息',
            type: 'info',
            duration: 8000,
            action: <Button size="sm" variant="outline">操作</Button>,
          })}
        >
          自定义Toast
        </Button>
        <Button variant="outline" onClick={clear}>
          清空所有
        </Button>
      </div>

      <ToastContainer 
        toasts={toasts}
        onRemove={remove}
        position="top-right"
      />
    </div>
  )
}

export const UseToastHook: Story = {
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story: '使用 useToast Hook 来管理Toast消息的完整示例，展示了正确的堆叠效果。',
      },
    },
  },
}

// 堆叠效果演示
const StackingDemo = () => {
  const [toasts, setToasts] = useState([
    { id: '1', type: 'success' as const, title: '成功', description: '第一条成功消息' },
    { id: '2', type: 'warning' as const, title: '警告', description: '第二条警告消息' },
    { id: '3', type: 'error' as const, title: '错误', description: '第三条错误消息' },
    { id: '4', type: 'info' as const, title: '信息', description: '第四条信息消息' },
  ])

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const addToast = () => {
    const newToast = {
      id: Date.now().toString(),
      type: ['success', 'warning', 'error', 'info'][Math.floor(Math.random() * 4)] as any,
      title: '新消息',
      description: `这是第 ${toasts.length + 1} 条消息`,
    }
    setToasts(prev => [newToast, ...prev])
  }

  return (
    <div className="p-8 space-y-4">
      <div className="space-x-4">
        <Button onClick={addToast}>添加Toast</Button>
        <Button variant="outline" onClick={() => setToasts([])}>清空所有</Button>
      </div>
      
      <p className="text-sm text-gray-600">
        当前有 {toasts.length} 条Toast消息。注意它们不会重叠，而是正确堆叠显示。
      </p>

      <ToastContainer 
        toasts={toasts}
        onRemove={removeToast}
        position="top-right"
        gap={12}
      />
    </div>
  )
}

export const StackingEffect: Story = {
  render: () => <StackingDemo />,
  parameters: {
    docs: {
      description: {
        story: '演示Toast组件的正确堆叠效果。多个Toast不会重叠，而是按顺序堆叠显示。',
      },
    },
  },
}

// 自动关闭演示
const AutoCloseDemo = () => {
  const [open, setOpen] = useState(false)

  const showToast = () => {
    setOpen(true)
    // 3秒后重置状态以便重新演示
    setTimeout(() => setOpen(false), 3500)
  }

  return (
    <div className="p-8">
      <Button onClick={showToast}>
        显示自动关闭Toast (3秒)
      </Button>
      
      <Toast
        title="自动关闭"
        description="这条消息将在3秒后自动关闭"
        type="success"
        duration={3000}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const AutoClose: Story = {
  render: () => <AutoCloseDemo />,
  parameters: {
    docs: {
      description: {
        story: '演示Toast的自动关闭功能。',
      },
    },
  },
} 