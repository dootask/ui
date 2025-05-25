import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Toast } from './Toast'

// Mock timers
vi.useFakeTimers()

describe('Toast', () => {
  beforeEach(() => {
    // 清理 body 中的额外元素
    document.body.innerHTML = '<div id="root"></div>'
  })

  afterEach(() => {
    // 清理测试后的DOM
    const extraElements = document.body.querySelectorAll(':not(#root)')
    extraElements.forEach(el => el.remove())
    vi.clearAllTimers()
  })

  it('应该渲染基本的Toast', () => {
    render(
      <Toast 
        title="测试标题" 
        description="测试描述" 
        open={true}
      />
    )

    expect(screen.getByText('测试标题')).toBeInTheDocument()
    expect(screen.getByText('测试描述')).toBeInTheDocument()
  })

  it('应该渲染不同类型的Toast', () => {
    const { rerender } = render(
      <Toast type="success" description="成功消息" open={true} />
    )
    expect(screen.getByRole('alert')).toHaveClass('border-green-200')

    rerender(<Toast type="error" description="错误消息" open={true} />)
    expect(screen.getByRole('alert')).toHaveClass('border-red-200')

    rerender(<Toast type="warning" description="警告消息" open={true} />)
    expect(screen.getByRole('alert')).toHaveClass('border-amber-200')

    rerender(<Toast type="info" description="信息消息" open={true} />)
    expect(screen.getByRole('alert')).toHaveClass('border-blue-200')
  })

  it('应该显示对应类型的图标', () => {
    render(<Toast type="success" description="成功消息" open={true} />)
    
    // 检查是否有SVG图标
    const alert = screen.getByRole('alert')
    expect(alert.querySelector('svg')).toBeInTheDocument()
  })

  it('应该支持自定义图标', () => {
    render(
      <Toast 
        description="自定义图标消息" 
        icon={<div data-testid="custom-icon">🎉</div>}
        open={true}
      />
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('应该支持closable属性', async () => {
    const onClose = vi.fn()
    render(
      <Toast 
        description="可关闭消息" 
        closable={true}
        onClose={onClose}
        open={true}
      />
    )

    const closeButton = screen.getByLabelText('关闭')
    expect(closeButton).toBeInTheDocument()

    await userEvent.click(closeButton)
    
    // 等待动画完成
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(onClose).toHaveBeenCalled()
  })

  it('应该在closable为false时隐藏关闭按钮', () => {
    render(
      <Toast 
        description="不可关闭消息" 
        closable={false}
        open={true}
      />
    )

    expect(screen.queryByLabelText('关闭')).not.toBeInTheDocument()
  })

  it('应该支持自动关闭', async () => {
    const onClose = vi.fn()
    render(
      <Toast 
        description="自动关闭消息" 
        duration={1000}
        onClose={onClose}
        open={true}
      />
    )

    // 快进到1秒后
    act(() => {
      vi.advanceTimersByTime(1000)
    })

    // 等待动画完成
    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(onClose).toHaveBeenCalled()
  })

  it('应该在duration为0时不自动关闭', () => {
    const onClose = vi.fn()
    render(
      <Toast 
        description="不自动关闭消息" 
        duration={0}
        onClose={onClose}
        open={true}
      />
    )

    // 等待很长时间
    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('应该支持自定义操作按钮', () => {
    render(
      <Toast 
        description="带操作按钮的消息" 
        action={<button data-testid="custom-action">重试</button>}
        open={true}
      />
    )

    expect(screen.getByTestId('custom-action')).toBeInTheDocument()
  })

  it('应该在open为false时不渲染', () => {
    render(
      <Toast 
        description="隐藏的消息" 
        open={false}
      />
    )

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('应该支持自定义ID', () => {
    render(
      <Toast 
        id="custom-toast-id"
        description="自定义ID消息" 
        open={true}
      />
    )

    expect(screen.getByTestId('toast-custom-toast-id')).toBeInTheDocument()
  })

  it('应该应用自定义className', () => {
    render(
      <Toast 
        description="自定义样式消息" 
        className="custom-toast-class"
        open={true}
      />
    )

    expect(screen.getByRole('alert')).toHaveClass('custom-toast-class')
  })

  it('应该支持无障碍属性', () => {
    render(
      <Toast 
        description="无障碍消息" 
        open={true}
      />
    )

    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('aria-live', 'polite')
  })

  it('应该只显示描述而不显示标题', () => {
    render(
      <Toast 
        description="只有描述的消息" 
        open={true}
      />
    )

    expect(screen.getByText('只有描述的消息')).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
}) 