import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from '../src/components/Modal'
import { Button } from '../src/components/Button'
import { Input } from '../src/components/Input'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ModalWithTrigger = (args: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>打开模态框</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <ModalWithTrigger title="默认模态框">
      <p className="text-gray-600 dark:text-gray-300">
        这是一个默认的模态框组件，包含标题和关闭按钮。
      </p>
    </ModalWithTrigger>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <ModalWithTrigger>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">确认删除</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          此操作无法撤销，确定要删除这个项目吗？
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline">取消</Button>
          <Button color="error">删除</Button>
        </div>
      </div>
    </ModalWithTrigger>
  ),
}

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null)
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const

    return (
      <div className="flex gap-2 flex-wrap">
        {sizes.map(size => (
          <Button key={size} onClick={() => setOpenSize(size)}>
            {size.toUpperCase()}
          </Button>
        ))}
        {sizes.map(size => (
          <Modal
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            title={`${size.toUpperCase()} 尺寸模态框`}
            size={size}
          >
            <p className="text-gray-600 dark:text-gray-300">
              这是一个 {size} 尺寸的模态框。不同尺寸适用于不同的内容长度。
            </p>
          </Modal>
        ))}
      </div>
    )
  },
}

export const FormModal: Story = {
  render: () => (
    <ModalWithTrigger title="编辑用户" size="lg">
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input label="姓名" placeholder="请输入姓名" />
          <Input label="邮箱" type="email" placeholder="请输入邮箱" />
        </div>
        <Input label="电话" placeholder="请输入电话号码" />
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            描述
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            rows={3}
            placeholder="请输入描述信息"
          />
        </div>
        <div className="flex gap-3 justify-end pt-4">
          <Button variant="outline">取消</Button>
          <Button type="submit">保存</Button>
        </div>
      </form>
    </ModalWithTrigger>
  ),
}

export const NonCentered: Story = {
  render: () => (
    <ModalWithTrigger title="顶部对齐" centered={false}>
      <p className="text-gray-600 dark:text-gray-300">
        这个模态框不是居中显示的，而是从顶部开始对齐。
        适用于内容较多或需要特定布局的场景。
      </p>
    </ModalWithTrigger>
  ),
}

export const NoCloseOnOverlay: Story = {
  render: () => (
    <ModalWithTrigger
      title="限制关闭"
      closeOnOverlayClick={false}
      closeOnEscape={false}
    >
      <div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          这个模态框不能通过点击遮罩层或按 ESC 键关闭，
          只能通过点击关闭按钮来关闭。
        </p>
        <p className="text-sm text-amber-600 dark:text-amber-400">
          ⚠️ 请注意：这种模式下用户只能通过明确的操作来关闭模态框。
        </p>
      </div>
    </ModalWithTrigger>
  ),
}

export const CustomCloseButton: Story = {
  render: () => (
    <ModalWithTrigger
      title="自定义关闭按钮"
      closeButton={
        <Button size="xs" variant="outline" color="error">
          关闭
        </Button>
      }
    >
      <p className="text-gray-600 dark:text-gray-300">
        这个模态框使用了自定义的关闭按钮样式。
      </p>
    </ModalWithTrigger>
  ),
}
