import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: '介绍/快速开始',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'DooTask UI 组件库 - 一个现代化的 React UI 组件库',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const IntroductionContent = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="p-8 max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            DooTask UI 组件库
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200">
            一个现代化的 React UI 组件库，基于 TypeScript + Vite + Tailwind CSS
            v4.1 构建
          </p>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-2 mb-8">
          <img
            src="https://img.shields.io/badge/License-MIT-green.svg"
            alt="MIT License"
          />
          <img
            src="https://badge.fury.io/js/@dootask%2Fui.svg"
            alt="npm version"
          />
        </div>

        {/* 特性 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            ✨ 特性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '🎨',
                title: '现代设计',
                desc: '精心设计的组件，支持深色模式',
              },
              {
                icon: '🎯',
                title: 'TypeScript',
                desc: '完整的 TypeScript 支持',
              },
              {
                icon: '🚀',
                title: '性能优化',
                desc: '基于 Vite 构建，体积小，加载快',
              },
              {
                icon: '🎭',
                title: '主题定制',
                desc: '基于 Tailwind CSS v4.1，支持主题定制',
              },
              { icon: '📱', title: '响应式', desc: '移动端友好的响应式设计' },
              { icon: '♿', title: '无障碍', desc: '遵循 WAI-ARIA 标准' },
              { icon: '🧩', title: '组合式', desc: '灵活的组件组合方式' },
              { icon: '📖', title: '文档齐全', desc: '完整的 Storybook 文档' },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 安装 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            🚀 安装
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
              {`npm install @dootask/ui
# 或
yarn add @dootask/ui
# 或
pnpm add @dootask/ui`}
            </pre>
          </div>
        </div>

        {/* 引入样式 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            📖 引入样式
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            在你的应用入口文件中引入样式：
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
              {`// main.tsx 或 App.tsx
import '@dootask/ui/dist/styles.css'`}
            </pre>
          </div>
        </div>

        {/* 主题配置 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            🎨 主题配置
          </h2>

          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
            默认 Mantis 绿色主题
          </h3>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg mb-6">
            <pre className="text-xs overflow-x-auto text-gray-800 dark:text-gray-200">
              {`:root {
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
}`}
            </pre>
          </div>

          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
            自定义主题
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            你可以通过 CSS 变量来自定义主题：
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
              {`:root {
  --color-primary-500: #your-color;
  --color-primary-600: #your-darker-color;
  /* ... 其他颜色变量 */
}`}
            </pre>
          </div>
        </div>

        {/* 组件总览 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            📦 组件总览
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                基础组件
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>
                  • <strong>Button</strong> - 按钮组件，支持多种样式、尺寸和状态
                </li>
                <li>
                  • <strong>Input</strong> -
                  输入框组件，支持标签、图标、错误状态
                </li>
                <li>
                  • <strong>Card</strong> -
                  卡片组件，支持多种内边距、阴影和悬停效果
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                反馈组件
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>
                  • <strong>Modal</strong> -
                  模态框组件，支持多种尺寸、ESC关闭、点击遮罩关闭
                </li>
                <li>
                  • <strong>Toast</strong> -
                  消息提示组件，支持4种类型、6个位置、自动关闭
                </li>
                <li>
                  • <strong>Portal</strong> - Portal组件，用于渲染到指定DOM节点
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 相关链接 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            🔗 相关链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'GitHub 仓库',
                url: 'https://github.com/dootask/ui',
                desc: '查看源代码',
              },
              {
                title: '问题反馈',
                url: 'https://github.com/dootask/ui/issues',
                desc: '报告问题',
              },
              {
                title: 'NPM 包',
                url: 'https://www.npmjs.com/package/@dootask/ui',
                desc: '下载包',
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {link.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* 底部 */}
        <div className="text-center text-gray-700 dark:text-gray-200">
          <hr className="border-gray-300 dark:border-gray-600 mb-6" />
          <p>
            由 <strong>DooTask 团队</strong> 用 ❤️ 制作
          </p>
        </div>
      </div>
    </div>
  )
}

export const Introduction: Story = {
  render: () => <IntroductionContent />,
  parameters: {
    docs: {
      description: {
        story: 'DooTask UI 组件库的介绍和快速开始指南。',
      },
    },
  },
}
