import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Card } from './components/Card'
import { Modal } from './components/Modal'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './styles.css'

export function DevApp() {
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            DooTask UI 组件库
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            基于 React + TypeScript + Tailwind CSS v4.1 构建
          </p>
        </div>

        {/* Button 组件展示 */}
        <Card padding="lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Button 按钮组件
          </h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button size="xs">超小按钮</Button>
              <Button size="sm">小按钮</Button>
              <Button size="md">中等按钮</Button>
              <Button size="lg">大按钮</Button>
              <Button size="xl">超大按钮</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="solid" color="primary">实心按钮</Button>
              <Button variant="outline" color="primary">边框按钮</Button>
              <Button variant="ghost" color="primary">幽灵按钮</Button>
              <Button variant="soft" color="primary">柔和按钮</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button color="primary">主要</Button>
              <Button color="success">成功</Button>
              <Button color="warning">警告</Button>
              <Button color="error">错误</Button>
              <Button color="info">信息</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button leftIcon={<UserIcon className="w-4 h-4" />}>
                带左图标
              </Button>
              <Button rightIcon={<MagnifyingGlassIcon className="w-4 h-4" />}>
                带右图标
              </Button>
              <Button loading>加载中</Button>
              <Button disabled>禁用状态</Button>
            </div>

            <Button fullWidth>全宽按钮</Button>
          </div>
        </Card>

        {/* Input 组件展示 */}
        <Card padding="lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Input 输入框组件
          </h2>
          <div className="space-y-4 max-w-md">
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
              label="密码"
              type="password"
              placeholder="请输入密码"
            />
            
            <Input
              label="邮箱"
              type="email"
              placeholder="请输入邮箱"
              error="邮箱格式不正确"
            />
            
            <div className="flex gap-2">
              <Input size="xs" placeholder="超小输入框" />
              <Input size="sm" placeholder="小输入框" />
              <Input size="md" placeholder="中等输入框" />
              <Input size="lg" placeholder="大输入框" />
              <Input size="xl" placeholder="超大输入框" />
            </div>
          </div>
        </Card>

        {/* Card 组件展示 */}
        <Card padding="lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Card 卡片组件
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card padding="sm" shadow="xs">
              <h3 className="font-semibold mb-2">小卡片</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                这是一个小尺寸的卡片组件
              </p>
            </Card>
            
            <Card padding="md" shadow="md">
              <h3 className="font-semibold mb-2">中等卡片</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                这是一个中等尺寸的卡片组件
              </p>
            </Card>
            
            <Card padding="lg" shadow="lg" hoverable>
              <h3 className="font-semibold mb-2">大卡片（可悬停）</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                这是一个大尺寸的卡片组件，支持悬停效果
              </p>
            </Card>
          </div>
        </Card>

        {/* Modal 组件展示 */}
        <Card padding="lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Modal 模态框组件
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              模态框组件支持多种尺寸、自定义关闭行为、表单内容等功能。
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => setModalOpen(true)}>
                打开模态框
              </Button>
            </div>
          </div>
        </Card>

        {/* Modal 实例 */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="DooTask UI 模态框"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              这是一个功能完整的模态框组件，支持：
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>点击遮罩层关闭</li>
              <li>按 ESC 键关闭</li>
              <li>多种尺寸选择</li>
              <li>自定义标题和内容</li>
              <li>Portal 渲染到 body</li>
              <li>防止页面滚动</li>
            </ul>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button onClick={() => setModalOpen(false)}>
                确定
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

// 仅在开发环境下渲染
if (import.meta.env.DEV) {
  const container = document.getElementById('root')
  if (container) {
    const root = createRoot(container)
    root.render(<DevApp />)
  }
} 