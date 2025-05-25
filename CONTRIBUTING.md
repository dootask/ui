# 贡献指南

感谢你对 DooTask UI 的兴趣！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 错误报告
- 💡 功能建议
- 📝 文档改进
- 🔧 代码贡献
- 🎨 设计改进

## 开始之前

### 环境要求

- Node.js >= 18
- npm >= 8
- Git

### 开发设置

1. **Fork 和克隆仓库**

```bash
# Fork 仓库到你的 GitHub 账号
# 然后克隆你的 fork
git clone https://github.com/your-username/ui.git
cd ui

# 添加原仓库为 upstream
git remote add upstream https://github.com/dootask/ui.git
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发环境**

```bash
# 启动开发服务器
npm run dev

# 在另一个终端启动 Storybook
npm run storybook
```

4. **运行测试**

```bash
# 运行所有测试
npm test

# 运行测试并监听文件变化
npm run test:watch

# 运行测试覆盖率
npm run test:coverage
```

## 项目结构

```
src/
├── components/          # 组件源码
│   ├── Button/         # 按钮组件
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Input/          # 输入框组件
│   └── Card/           # 卡片组件
├── hooks/              # 自定义 Hooks
├── utils/              # 工具函数
│   ├── cn.ts           # 类名合并工具
│   └── variants.ts     # 组件变体配置
├── types/              # TypeScript 类型定义
├── test/               # 测试配置
├── styles.css          # 全局样式
└── index.ts            # 导出文件

stories/                # Storybook 文档
docs/                   # 文档文件
examples/               # 使用示例
```

## 开发工作流

### 1. 创建分支

从 `main` 分支创建一个新分支：

```bash
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

分支命名规范：
- `feature/` - 新功能
- `fix/` - 错误修复
- `docs/` - 文档更新
- `refactor/` - 代码重构
- `test/` - 测试相关

### 2. 提交代码

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能
git commit -m "feat: add new Button component"

# 修复
git commit -m "fix: resolve Input focus issue"

# 文档
git commit -m "docs: update Button component documentation"

# 样式
git commit -m "style: improve Card component spacing"
```

### 3. 推送和创建 PR

```bash
git push origin feature/your-feature-name
```

然后在 GitHub 上创建 Pull Request。

## 贡献类型

### 🐛 报告错误

使用 [GitHub Issues](https://github.com/dootask/ui/issues) 报告错误：

1. 搜索已有 issues 确保问题未被报告
2. 使用错误报告模板
3. 提供详细的重现步骤
4. 包含环境信息（浏览器、Node.js 版本等）

### 💡 功能建议

1. 搜索已有 issues 确保建议未被提出
2. 使用功能请求模板
3. 详细描述功能需求和使用场景
4. 考虑向后兼容性

### 🔧 代码贡献

#### 新增组件

1. **创建组件目录**

```bash
src/components/YourComponent/
├── YourComponent.tsx      # 组件实现
├── YourComponent.test.tsx # 单元测试
└── index.ts              # 导出文件
```

2. **组件实现模板**

```tsx
import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // 组件特定的 props
  variant?: 'default' | 'special'
  size?: 'sm' | 'md' | 'lg'
}

const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // 基础样式
          'base-classes',
          // 变体样式
          {
            'variant-default': variant === 'default',
            'variant-special': variant === 'special',
          },
          className
        )}
        {...props}
      />
    )
  }
)

YourComponent.displayName = 'YourComponent'

export { YourComponent }
```

3. **编写测试**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { YourComponent } from './YourComponent'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent>Test content</YourComponent>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<YourComponent className="custom">Test</YourComponent>)
    expect(screen.getByText('Test')).toHaveClass('custom')
  })

  // 更多测试...
})
```

4. **创建 Storybook 文档**

```tsx
// stories/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { YourComponent } from '../src/components/YourComponent'

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default component',
  },
}
```

5. **更新导出文件**

```tsx
// src/index.ts
export { YourComponent } from './components/YourComponent'
export type { YourComponentProps } from './components/YourComponent'
```

#### 代码规范

1. **TypeScript** - 所有代码必须有类型注释
2. **ESLint** - 遵循项目的 ESLint 配置
3. **Prettier** - 使用 Prettier 格式化代码
4. **测试** - 新功能必须有对应的单元测试
5. **文档** - 新组件必须有 Storybook 文档

### 📝 文档贡献

1. 组件 API 文档使用 TypeScript 接口自动生成
2. 使用示例放在 Storybook stories 中
3. 指南文档放在 `docs/` 目录
4. README 更新要保持简洁明了

## 发布流程

维护者负责版本发布：

1. 更新 `CHANGELOG.md`
2. 更新 `package.json` 版本号
3. 创建版本标签
4. 发布到 npm

## 代码评审

所有 PR 都需要经过代码评审：

1. 自动化检查（CI/CD）
2. 至少一个维护者的评审
3. 确保测试通过
4. 确保文档完整

## 行为准则

请遵循我们的 [行为准则](CODE_OF_CONDUCT.md)，营造友好的贡献环境。

## 需要帮助？

- 查看 [GitHub Issues](https://github.com/dootask/ui/issues)
- 查看 [GitHub Discussions](https://github.com/dootask/ui/discussions)
- 发送邮件到：dootask@example.com

## 感谢

感谢所有为 DooTask UI 做出贡献的开发者！

<a href="https://github.com/dootask/ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dootask/ui" />
</a> 