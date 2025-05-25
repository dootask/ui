# 快速开始

## 安装

使用 npm、yarn 或 pnpm 安装 DooTask UI：

```bash
npm install @dootask/ui
# 或
yarn add @dootask/ui
# 或
pnpm add @dootask/ui
```

## 导入样式

在你的应用入口文件中导入样式：

```tsx
// main.tsx 或 App.tsx
import '@dootask/ui/dist/styles.css'
```

## 基本使用

### Button 按钮

```tsx
import { Button } from '@dootask/ui'
import { UserIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <div>
      {/* 基本按钮 */}
      <Button>点击我</Button>
      
      {/* 不同变体 */}
      <Button variant="outline">边框按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      
      {/* 不同颜色 */}
      <Button color="success">成功</Button>
      <Button color="error">错误</Button>
      
      {/* 带图标 */}
      <Button leftIcon={<UserIcon className="w-4 h-4" />}>
        用户
      </Button>
      
      {/* 加载状态 */}
      <Button loading>加载中</Button>
    </div>
  )
}
```

### Input 输入框

```tsx
import { Input } from '@dootask/ui'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <div>
      {/* 基本输入框 */}
      <Input placeholder="请输入内容" />
      
      {/* 带标签 */}
      <Input label="用户名" placeholder="请输入用户名" />
      
      {/* 带图标 */}
      <Input
        label="搜索"
        placeholder="搜索内容..."
        leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
      />
      
      {/* 错误状态 */}
      <Input
        label="邮箱"
        placeholder="请输入邮箱"
        error="邮箱格式不正确"
      />
    </div>
  )
}
```

### Card 卡片

```tsx
import { Card, Button } from '@dootask/ui'

function App() {
  return (
    <div>
      {/* 基本卡片 */}
      <Card>
        <h3>卡片标题</h3>
        <p>卡片内容</p>
      </Card>
      
      {/* 自定义样式 */}
      <Card padding="lg" shadow="lg" hoverable>
        <h3>产品卡片</h3>
        <p>这是一个产品介绍卡片</p>
        <Button>了解更多</Button>
      </Card>
    </div>
  )
}
```

## 主题定制

### 自定义颜色

你可以通过 CSS 变量来自定义主题颜色：

```css
:root {
  /* 自定义主色调 */
  --color-primary-50: #your-color;
  --color-primary-100: #your-color;
  --color-primary-200: #your-color;
  --color-primary-300: #your-color;
  --color-primary-400: #your-color;
  --color-primary-500: #your-color;
  --color-primary-600: #your-color;
  --color-primary-700: #your-color;
  --color-primary-800: #your-color;
  --color-primary-900: #your-color;
  --color-primary-950: #your-color;
}
```

### 深色模式

组件库自动支持深色模式，会根据用户的系统设置自动切换。你也可以手动控制：

```css
/* 强制深色模式 */
.dark {
  color-scheme: dark;
}
```

## TypeScript 支持

DooTask UI 完全支持 TypeScript，所有组件都有完整的类型定义：

```tsx
import { Button, type ButtonComponentProps } from '@dootask/ui'

// 组件 props 有完整的类型提示
const MyButton: React.FC<ButtonComponentProps> = (props) => {
  return <Button {...props} />
}
```

## 下一步

- 查看 [Storybook 文档](http://localhost:6006) 了解更多组件示例
- 查看 [GitHub 仓库](https://github.com/dootask/ui) 获取最新更新
- 提交 [Issue](https://github.com/dootask/ui/issues) 报告问题或建议 