# @dootask/ui

一个现代化的 React UI 组件库，基于 TypeScript + Vite + Tailwind CSS v4.1 构建。

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm version](https://badge.fury.io/js/@dootask%2Fui.svg)](https://badge.fury.io/js/@dootask%2Fui)

## ✨ 特性

- 🎨 **现代设计** - 精心设计的组件，支持深色模式
- 🎯 **TypeScript** - 完整的 TypeScript 支持
- 🚀 **性能优化** - 基于 Vite 构建，体积小，加载快
- 🎭 **主题定制** - 基于 Tailwind CSS v4.1，支持主题定制
- 📱 **响应式** - 移动端友好的响应式设计
- ♿ **无障碍** - 遵循 WAI-ARIA 标准
- 🧩 **组合式** - 灵活的组件组合方式
- 📖 **文档齐全** - 完整的 Storybook 文档

## 🚀 快速开始

### 安装

```bash
npm install @dootask/ui
# 或
yarn add @dootask/ui
# 或
pnpm add @dootask/ui
```

### 引入样式

在你的应用入口文件中引入样式：

```tsx
// main.tsx 或 App.tsx
import '@dootask/ui/dist/styles.css'
```

### 使用组件

```tsx
import { Button, Input, Card } from '@dootask/ui'

function App() {
  return (
    <div className="p-4 space-y-4">
      <Card padding="lg">
        <h1 className="text-2xl font-bold mb-4">欢迎使用 DooTask UI</h1>
        
        <Input
          label="用户名"
          placeholder="请输入用户名"
          className="mb-4"
        />
        
        <Button color="primary" size="lg">
          登录
        </Button>
      </Card>
    </div>
  )
}
```

## 🎨 主题配置

### 默认主题色

DooTask UI 使用 Mantis 绿色作为默认主题色：

```css
:root {
  --color-primary-50: #f5fbf2;
  --color-primary-100: #e8f6e2;
  --color-primary-200: #d2ecc6;
  --color-primary-300: #addc99;
  --color-primary-400: #84c56a;
  --color-primary-500: #5da740;
  --color-primary-600: #498930;
  --color-primary-700: #3b6d28;
  --color-primary-800: #325724;
  --color-primary-900: #2a481f;
  --color-primary-950: #13270c;
}
```

### 自定义主题

你可以通过 CSS 变量来自定义主题：

```css
:root {
  --color-primary-500: #your-color;
  --color-primary-600: #your-darker-color;
  /* ... 其他颜色变量 */
}
```

## 📦 组件列表

- [x] **Button** - 按钮组件
- [x] **Input** - 输入框组件  
- [x] **Card** - 卡片组件
- [ ] **Modal** - 模态框组件
- [ ] **Toast** - 提示组件
- [ ] **Loading** - 加载组件
- [ ] **Avatar** - 头像组件
- [ ] **Badge** - 徽章组件
- [ ] **Tabs** - 标签页组件
- [ ] **Tooltip** - 工具提示组件

## 🛠 开发

### 环境要求

- Node.js >= 18
- npm >= 8

### 克隆项目

```bash
git clone https://github.com/dootask/ui.git
cd ui
npm install
```

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 启动 Storybook
npm run storybook

# 运行测试
npm run test

# 代码检查
npm run lint
```

### 项目结构

```
src/
├── components/          # 组件源码
│   ├── Button/
│   ├── Input/
│   └── Card/
├── hooks/              # 自定义 Hooks
├── utils/              # 工具函数
├── types/              # TypeScript 类型定义
├── styles.css          # 样式文件
└── index.ts            # 导出文件
```

## 🤝 贡献

欢迎贡献代码！请先阅读 [贡献指南](CONTRIBUTING.md)。

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 🔗 相关链接

- [GitHub 仓库](https://github.com/dootask/ui)
- [问题反馈](https://github.com/dootask/ui/issues)
- [更新日志](CHANGELOG.md)
- [文档站点](https://ui.dootask.com) (即将推出)

---

**由 DooTask 团队用 ❤️ 制作** 