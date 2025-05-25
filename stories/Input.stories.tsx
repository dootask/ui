import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../src/components/Input'
import { UserIcon, MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '请输入内容...',
  },
}

export const WithLabel: Story = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
  },
}

export const WithError: Story = {
  args: {
    label: '邮箱地址',
    placeholder: '请输入邮箱',
    error: '邮箱格式不正确',
    value: 'invalid-email',
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
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
        leftIcon={<UserIcon className="w-4 h-4" />}
        rightIcon={<EyeIcon className="w-4 h-4" />}
      />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="xs" placeholder="超小输入框" />
      <Input size="sm" placeholder="小输入框" />
      <Input size="md" placeholder="中等输入框" />
      <Input size="lg" placeholder="大输入框" />
      <Input size="xl" placeholder="超大输入框" />
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="文本" type="text" placeholder="文本输入" />
      <Input label="邮箱" type="email" placeholder="邮箱输入" />
      <Input label="密码" type="password" placeholder="密码输入" />
      <Input label="数字" type="number" placeholder="数字输入" />
      <Input label="电话" type="tel" placeholder="电话输入" />
      <Input label="网址" type="url" placeholder="网址输入" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="正常状态" placeholder="正常输入框" />
      <Input label="禁用状态" placeholder="禁用输入框" disabled />
      <Input 
        label="错误状态" 
        placeholder="错误输入框" 
        error="这是一个错误信息"
        value="错误的值"
      />
    </div>
  ),
} 