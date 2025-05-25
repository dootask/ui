import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../src/components/Card'
import { Button } from '../src/components/Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shadow: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">默认卡片</h3>
        <p className="text-gray-600 dark:text-gray-300">
          这是一个默认的卡片组件，包含一些示例内容。
        </p>
      </div>
    ),
  },
}

export const Paddings: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card padding="xs">
        <h4 className="font-semibold mb-1">超小内边距</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">xs padding</p>
      </Card>
      <Card padding="sm">
        <h4 className="font-semibold mb-1">小内边距</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">sm padding</p>
      </Card>
      <Card padding="md">
        <h4 className="font-semibold mb-1">中等内边距</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">md padding</p>
      </Card>
      <Card padding="lg">
        <h4 className="font-semibold mb-1">大内边距</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">lg padding</p>
      </Card>
      <Card padding="xl">
        <h4 className="font-semibold mb-1">超大内边距</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">xl padding</p>
      </Card>
    </div>
  ),
}

export const Shadows: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card shadow="xs">
        <h4 className="font-semibold mb-1">超小阴影</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">xs shadow</p>
      </Card>
      <Card shadow="sm">
        <h4 className="font-semibold mb-1">小阴影</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">sm shadow</p>
      </Card>
      <Card shadow="md">
        <h4 className="font-semibold mb-1">中等阴影</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">md shadow</p>
      </Card>
      <Card shadow="lg">
        <h4 className="font-semibold mb-1">大阴影</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">lg shadow</p>
      </Card>
      <Card shadow="xl">
        <h4 className="font-semibold mb-1">超大阴影</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">xl shadow</p>
      </Card>
    </div>
  ),
}

export const Hoverable: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <h4 className="font-semibold mb-2">普通卡片</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          这是一个普通的卡片，没有悬停效果。
        </p>
      </Card>
      <Card hoverable>
        <h4 className="font-semibold mb-2">可悬停卡片</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          这是一个可悬停的卡片，鼠标悬停时会有阴影效果。
        </p>
      </Card>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="max-w-md">
      <Card padding="lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold">UI</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">DooTask UI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              现代化的 React 组件库
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          基于 TypeScript + Vite + Tailwind CSS v4.1 构建的高质量 UI 组件库，
          提供丰富的组件和完善的主题系统。
        </p>
        <div className="flex gap-2">
          <Button size="sm" color="primary">
            开始使用
          </Button>
          <Button size="sm" variant="outline" color="primary">
            查看文档
          </Button>
        </div>
      </Card>
    </div>
  ),
}

export const NoBorder: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card bordered>
        <h4 className="font-semibold mb-2">有边框卡片</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          这是一个有边框的卡片。
        </p>
      </Card>
      <Card bordered={false}>
        <h4 className="font-semibold mb-2">无边框卡片</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          这是一个无边框的卡片。
        </p>
      </Card>
    </div>
  ),
} 