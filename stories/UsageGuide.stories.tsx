import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../src/components/Button'
import { Input } from '../src/components/Input'
import { Card } from '../src/components/Card'
import { Modal } from '../src/components/Modal'
import { ToastContainer, useToast } from '../src/components/Toast'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const meta = {
  title: '介绍/使用指南',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '完整的组件使用指南和最佳实践示例。',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// 基础使用示例
const BasicUsageDemo = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="p-8 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          基础组件使用
        </h2>

        {/* Button 示例 */}
        <Card padding="lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Button 按钮
          </h3>
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Button size="sm">小按钮</Button>
              <Button size="md">中按钮</Button>
              <Button size="lg">大按钮</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="solid" color="primary">
                实心
              </Button>
              <Button variant="outline" color="primary">
                边框
              </Button>
              <Button variant="ghost" color="primary">
                幽灵
              </Button>
              <Button variant="soft" color="primary">
                柔和
              </Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button color="success">成功</Button>
              <Button color="warning">警告</Button>
              <Button color="error">错误</Button>
              <Button color="info">信息</Button>
            </div>
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              查看代码 ↓
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`import { Button } from '@dootask/ui'

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中按钮</Button>
<Button size="lg">大按钮</Button>

// 不同变体
<Button variant="solid">实心</Button>
<Button variant="outline">边框</Button>
<Button variant="ghost">幽灵</Button>

// 不同颜色
<Button color="success">成功</Button>
<Button color="warning">警告</Button>
<Button color="error">错误</Button>`}
            </pre>
          </details>
        </Card>

        {/* Input 示例 */}
        <Card padding="lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Input 输入框
          </h3>
          <div className="space-y-3 max-w-md">
            <Input
              label="用户名"
              placeholder="请输入用户名"
              leftIcon={<UserIcon className="w-4 h-4" />}
            />
            <Input
              label="搜索"
              placeholder="搜索内容..."
              rightIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
            />
            <Input
              label="邮箱"
              type="email"
              placeholder="请输入邮箱"
              error="邮箱格式不正确"
            />
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              查看代码 ↓
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`import { Input } from '@dootask/ui'
import { UserIcon } from '@heroicons/react/24/outline'

// 带标签和图标
<Input
  label="用户名"
  placeholder="请输入用户名"
  leftIcon={<UserIcon className="w-4 h-4" />}
/>

// 错误状态
<Input
  label="邮箱"
  type="email"
  placeholder="请输入邮箱"
  error="邮箱格式不正确"
/>`}
            </pre>
          </details>
        </Card>
      </div>
    </div>
  )
}

// Toast 使用示例
const ToastUsageDemo = () => {
  const { toasts, success, error, warning, info, remove, clear, toast } =
    useToast({
      defaultPosition: 'top-right',
      maxToasts: 5,
    })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="p-8 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Toast 消息提示使用
        </h2>

        <Card padding="lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            基础用法
          </h3>
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => success('操作成功！')} color="success">
                成功提示
              </Button>
              <Button onClick={() => error('操作失败！')} color="error">
                错误提示
              </Button>
              <Button onClick={() => warning('请注意！')} color="warning">
                警告提示
              </Button>
              <Button onClick={() => info('信息提示')} color="info">
                信息提示
              </Button>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                onClick={() =>
                  toast({
                    title: '自定义 Toast',
                    description: '这是一个自定义的消息',
                    type: 'info',
                    duration: 8000,
                    action: (
                      <Button size="sm" variant="outline">
                        重试
                      </Button>
                    ),
                  })
                }
              >
                自定义 Toast
              </Button>
              <Button variant="outline" onClick={clear}>
                清空所有
              </Button>
            </div>
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              查看代码 ↓
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`import { ToastContainer, useToast } from '@dootask/ui'

function App() {
  const { toasts, success, error, warning, info, remove, toast } = useToast({
    defaultPosition: 'top-right',
    maxToasts: 5,
  })

  return (
    <div>
      {/* 基础用法 */}
      <Button onClick={() => success('操作成功！')}>
        成功提示
      </Button>
      
      {/* 自定义 Toast */}
      <Button onClick={() => toast({
        title: '自定义标题',
        description: '自定义内容',
        type: 'info',
        duration: 8000,
        action: <Button size="sm">重试</Button>
      })}>
        自定义 Toast
      </Button>

      {/* Toast 容器 - 必须放在应用中 */}
      <ToastContainer 
        toasts={toasts}
        onRemove={remove}
        position="top-right"
      />
    </div>
  )
}`}
            </pre>
          </details>
        </Card>

        {/* Toast 容器 */}
        <ToastContainer
          toasts={toasts}
          onRemove={remove}
          position="top-right"
        />
      </div>
    </div>
  )
}

// Modal 使用示例
const ModalUsageDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="p-8 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Modal 模态框使用
        </h2>

        <Card padding="lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            基础用法
          </h3>
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
                <Button
                  key={s}
                  variant={size === s ? 'solid' : 'outline'}
                  onClick={() => {
                    setSize(s)
                    setIsOpen(true)
                  }}
                >
                  {s.toUpperCase()} 模态框
                </Button>
              ))}
            </div>
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              查看代码 ↓
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`import { Modal, Button } from '@dootask/ui'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        打开模态框
      </Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="模态框标题"
        size="md"
      >
        <div className="space-y-4">
          <p>这是模态框的内容...</p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              取消
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              确定
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}`}
            </pre>
          </details>
        </Card>

        {/* Modal 实例 */}
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={`${size.toUpperCase()} 尺寸模态框`}
          size={size}
        >
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              这是一个 {size.toUpperCase()} 尺寸的模态框示例。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-200">
              <li>支持 ESC 键关闭</li>
              <li>支持点击遮罩层关闭</li>
              <li>支持多种尺寸：sm, md, lg, xl</li>
              <li>自动焦点管理</li>
              <li>防止页面滚动</li>
            </ul>
            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                取消
              </Button>
              <Button onClick={() => setIsOpen(false)}>确定</Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

// 完整应用示例
const CompleteAppDemo = () => {
  const { toasts, success, error, remove } = useToast()
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ username: '', email: '' })

  const handleSubmit = () => {
    if (!formData.username || !formData.email) {
      error('请填写完整信息')
      return
    }
    success('注册成功！')
    setModalOpen(false)
    setFormData({ username: '', email: '' })
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="p-8 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          完整应用示例
        </h2>

        <Card padding="lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            用户注册表单
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            这是一个完整的示例，展示了如何组合使用多个组件构建实际应用。
          </p>

          <Button onClick={() => setModalOpen(true)} size="lg">
            打开注册表单
          </Button>

          <details className="mt-6">
            <summary className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              查看完整代码 ↓
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`import { Button, Input, Card, Modal, ToastContainer, useToast } from '@dootask/ui'
import { useState } from 'react'

function App() {
  const { toasts, success, error, remove } = useToast()
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ username: '', email: '' })

  const handleSubmit = () => {
    if (!formData.username || !formData.email) {
      error('请填写完整信息')
      return
    }
    success('注册成功！')
    setModalOpen(false)
    setFormData({ username: '', email: '' })
  }

  return (
    <div className="p-8">
      <Card padding="lg">
        <h3 className="text-lg font-semibold mb-4">用户注册</h3>
        <Button onClick={() => setModalOpen(true)} size="lg">
          打开注册表单
        </Button>
      </Card>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="用户注册"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="用户名"
            value={formData.username}
            onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
            placeholder="请输入用户名"
          />
          <Input
            label="邮箱"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="请输入邮箱"
          />
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              取消
            </Button>
            <Button onClick={handleSubmit}>
              注册
            </Button>
          </div>
        </div>
      </Modal>

      <ToastContainer 
        toasts={toasts}
        onRemove={remove}
        position="top-right"
      />
    </div>
  )
}`}
            </pre>
          </details>
        </Card>

        {/* Modal */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="用户注册"
          size="md"
        >
          <div className="space-y-4">
            <Input
              label="用户名"
              value={formData.username}
              onChange={e =>
                setFormData(prev => ({ ...prev, username: e.target.value }))
              }
              placeholder="请输入用户名"
            />
            <Input
              label="邮箱"
              type="email"
              value={formData.email}
              onChange={e =>
                setFormData(prev => ({ ...prev, email: e.target.value }))
              }
              placeholder="请输入邮箱"
            />
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                取消
              </Button>
              <Button onClick={handleSubmit}>注册</Button>
            </div>
          </div>
        </Modal>

        {/* Toast 容器 */}
        <ToastContainer
          toasts={toasts}
          onRemove={remove}
          position="top-right"
        />
      </div>
    </div>
  )
}

export const BasicUsage: Story = {
  render: () => <BasicUsageDemo />,
  parameters: {
    docs: {
      description: {
        story: '展示基础组件的常用方法和属性配置。',
      },
    },
  },
}

export const ToastUsage: Story = {
  render: () => <ToastUsageDemo />,
  parameters: {
    docs: {
      description: {
        story: '展示 Toast 组件的完整用法，包括 useToast Hook 的使用方法。',
      },
    },
  },
}

export const ModalUsage: Story = {
  render: () => <ModalUsageDemo />,
  parameters: {
    docs: {
      description: {
        story: '展示 Modal 组件的使用方法和不同尺寸效果。',
      },
    },
  },
}

export const CompleteApp: Story = {
  render: () => <CompleteAppDemo />,
  parameters: {
    docs: {
      description: {
        story: '一个完整的应用示例，展示如何组合使用多个组件构建实际功能。',
      },
    },
  },
}
