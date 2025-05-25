import React from 'react'
import { Button, Input, Card } from '../src/index'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// 注意：在实际使用中，你需要导入样式文件
// import '@dootask/ui/dist/styles.css'
// 在本示例中，直接导入源码样式
import '../src/styles.css'

export default function BasicUsageExample() {
  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">
        DooTask UI 基本使用示例
      </h1>

      {/* 按钮示例 */}
      <Card padding="lg">
        <h2 className="text-xl font-semibold mb-4">按钮组件</h2>
        <div className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <Button>默认按钮</Button>
            <Button variant="outline">边框按钮</Button>
            <Button variant="ghost">幽灵按钮</Button>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Button color="success">成功</Button>
            <Button color="warning">警告</Button>
            <Button color="error">错误</Button>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Button 
              leftIcon={<UserIcon className="w-4 h-4" />}
              size="lg"
            >
              带图标
            </Button>
            <Button loading>加载中</Button>
          </div>
        </div>
      </Card>

      {/* 输入框示例 */}
      <Card padding="lg">
        <h2 className="text-xl font-semibold mb-4">输入框组件</h2>
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
            label="邮箱"
            type="email"
            placeholder="请输入邮箱"
            error="邮箱格式不正确"
          />
        </div>
      </Card>

      {/* 卡片示例 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-2">普通卡片</h3>
          <p className="text-gray-600 text-sm">
            这是一个普通的卡片组件，使用默认样式。
          </p>
        </Card>
        
        <Card hoverable shadow="lg">
          <h3 className="font-semibold mb-2">可悬停卡片</h3>
          <p className="text-gray-600 text-sm">
            这是一个可悬停的卡片，鼠标悬停时会有阴影效果。
          </p>
        </Card>
      </div>
    </div>
  )
} 