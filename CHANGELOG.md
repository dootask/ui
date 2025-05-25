# 更新日志

本文档记录了 DooTask UI 的所有重要变更。

本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

## [0.1.0] - 2025-01-26

### 新增

#### 🎉 首次发布
- 发布第一个版本的 DooTask UI 组件库
- 基于 React 19、TypeScript、Vite 和 Tailwind CSS v4.1 构建

#### 📦 核心组件
- **Button** - 按钮组件
  - 支持 5 种变体：solid、outline、ghost、soft、plain
  - 支持 6 种颜色：primary、secondary、success、warning、error、info  
  - 支持 5 种尺寸：xs、sm、md、lg、xl
  - 支持左右图标、加载状态、全宽模式
  - 完整的键盘访问支持

- **Input** - 输入框组件
  - 支持标签、错误提示
  - 支持左右图标
  - 支持多种输入类型
  - 支持 5 种尺寸
  - 完整的表单验证支持

- **Card** - 卡片组件
  - 可配置内边距、阴影、圆角
  - 支持边框开关、悬停效果
  - 灵活的布局支持

#### 🎨 主题系统
- **Mantis 主题** - 默认绿色主题（#f5fbf2 到 #13270c）
- **深色模式** - 自动适配系统设置
- **CSS 变量** - 完全可定制的颜色系统
- **Tailwind 集成** - 无缝集成 Tailwind CSS v4.1

#### 🛠 开发工具
- **TypeScript** - 完整的类型支持和智能提示
- **Vite** - 快速的构建和热重载
- **Vitest** - 现代化的测试框架
- **Storybook** - 完整的组件文档和示例
- **ESLint + Prettier** - 代码质量保证

#### 📚 文档和示例
- 完整的 Storybook 文档
- 基本使用示例
- TypeScript 类型定义
- 主题定制指南

#### 🏗 构建配置
- ES Module 和 UMD 双格式输出
- Tree-shaking 支持
- 压缩优化
- 源码映射

### 技术规格

- **React**: ^19.1.0
- **TypeScript**: ^5.8.3
- **Vite**: ^6.3.5
- **Tailwind CSS**: ^4.1.7
- **Heroicons**: ^2.2.0
- **Class Variance Authority**: ^0.7.1

### 包大小

- ES Module: 18.68 kB
- UMD: 13.07 kB  
- Gzipped: ~5.30 kB

### 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

### 贡献者

- DooTask Team

---

## 即将到来

### v0.2.0 计划功能

- [ ] Modal 模态框组件
- [ ] Toast 提示组件
- [ ] Loading 加载组件
- [ ] Avatar 头像组件
- [ ] Badge 徽章组件

### v0.3.0 计划功能

- [ ] Tabs 标签页组件
- [ ] Tooltip 工具提示组件
- [ ] Dropdown 下拉菜单组件
- [ ] Form 表单组件
- [ ] Table 表格组件

---

**注：** 本项目正在积极开发中，API 在 1.0.0 版本之前可能会有破坏性变更。 