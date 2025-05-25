import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../src/components/Button'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft', 'plain'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '默认按钮',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="solid">实心按钮</Button>
      <Button variant="outline">边框按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="soft">柔和按钮</Button>
      <Button variant="plain">朴素按钮</Button>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button color="primary">主要</Button>
      <Button color="success">成功</Button>
      <Button color="warning">警告</Button>
      <Button color="error">错误</Button>
      <Button color="info">信息</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="xs">超小</Button>
      <Button size="sm">小</Button>
      <Button size="md">中等</Button>
      <Button size="lg">大</Button>
      <Button size="xl">超大</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button leftIcon={<UserIcon className="w-4 h-4" />}>
        左图标
      </Button>
      <Button rightIcon={<MagnifyingGlassIcon className="w-4 h-4" />}>
        右图标
      </Button>
      <Button 
        leftIcon={<UserIcon className="w-4 h-4" />}
        rightIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
      >
        双图标
      </Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button>正常状态</Button>
      <Button loading>加载中</Button>
      <Button disabled>禁用状态</Button>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth>全宽按钮</Button>
    </div>
  ),
} 