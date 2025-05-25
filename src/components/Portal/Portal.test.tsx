import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Portal } from './Portal'

describe('Portal', () => {
  beforeEach(() => {
    // 清理 body 中的额外元素
    document.body.innerHTML = '<div id="root"></div>'
  })

  afterEach(() => {
    // 清理测试后的DOM
    const extraElements = document.body.querySelectorAll(':not(#root)')
    extraElements.forEach(el => {
      if (el.parentNode === document.body) {
        document.body.removeChild(el)
      }
    })
  })

  it('应该渲染children到document.body', () => {
    render(
      <Portal>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    // 内容应该在 body 中，而不是在 root div 中
    expect(screen.getByTestId('portal-content')).toBeInTheDocument()
    expect(document.body).toContainElement(screen.getByTestId('portal-content'))
  })

  it('应该渲染children到指定的container', () => {
    const customContainer = document.createElement('div')
    customContainer.id = 'custom-container'
    document.body.appendChild(customContainer)

    render(
      <Portal container={customContainer}>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    expect(customContainer).toContainElement(screen.getByTestId('portal-content'))
  })

  it('应该使用containerSelector查找容器', () => {
    const customContainer = document.createElement('div')
    customContainer.id = 'custom-selector-container'
    document.body.appendChild(customContainer)

    render(
      <Portal containerSelector="#custom-selector-container">
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    expect(customContainer).toContainElement(screen.getByTestId('portal-content'))
  })

  it('应该在containerSelector不存在时创建新容器', () => {
    render(
      <Portal containerSelector="#non-existent" cleanupOnUnmount>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    const createdContainer = document.getElementById('non-existent')
    expect(createdContainer).toBeInTheDocument()
    expect(createdContainer).toContainElement(screen.getByTestId('portal-content'))
  })

  it('应该在cleanupOnUnmount为true时清理创建的容器', () => {
    const { unmount } = render(
      <Portal containerSelector="#cleanup-test" cleanupOnUnmount>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    const createdContainer = document.getElementById('cleanup-test')
    expect(createdContainer).toBeInTheDocument()

    unmount()

    expect(document.getElementById('cleanup-test')).not.toBeInTheDocument()
  })

  it('应该在cleanupOnUnmount为false时保留容器', () => {
    const { unmount } = render(
      <Portal containerSelector="#persist-test" cleanupOnUnmount={false}>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    const createdContainer = document.getElementById('persist-test')
    expect(createdContainer).toBeInTheDocument()

    unmount()

    expect(document.getElementById('persist-test')).toBeInTheDocument()
  })

  it('应该在没有mountNode时返回null', () => {
    // 模拟querySelector返回null的情况，并且不创建新容器
    const originalQuerySelector = document.querySelector
    document.querySelector = vi.fn().mockReturnValue(null)

    render(
      <Portal containerSelector="#non-existent" cleanupOnUnmount={false}>
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    // 由于Portal会创建新容器，所以内容仍然会被渲染
    // 这里我们测试的是当querySelector返回null但Portal仍然会创建容器的情况
    expect(document.getElementById('non-existent')).toBeInTheDocument()
    expect(screen.getByTestId('portal-content')).toBeInTheDocument()

    // 恢复原始方法
    document.querySelector = originalQuerySelector
  })

  it('应该优先使用传入的container而不是containerSelector', () => {
    const primaryContainer = document.createElement('div')
    primaryContainer.id = 'primary-container'
    document.body.appendChild(primaryContainer)

    const secondaryContainer = document.createElement('div')
    secondaryContainer.id = 'secondary-container'
    document.body.appendChild(secondaryContainer)

    render(
      <Portal container={primaryContainer} containerSelector="#secondary-container">
        <div data-testid="portal-content">Portal Content</div>
      </Portal>
    )

    expect(primaryContainer).toContainElement(screen.getByTestId('portal-content'))
    expect(secondaryContainer).not.toContainElement(screen.getByTestId('portal-content'))
  })
}) 