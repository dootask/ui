import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders when open is true', () => {
    render(
      <Modal open={true} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when open is false', () => {
    render(
      <Modal open={false} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Modal open={true} title="Test Modal" onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.click(screen.getByLabelText('关闭'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay is clicked and closeOnOverlayClick is true', () => {
    const handleClose = vi.fn()
    render(
      <Modal open={true} title="Test Modal" onClose={handleClose} closeOnOverlayClick={true}>
        <p>Modal content</p>
      </Modal>
    )
    
    // 点击遮罩层（父容器）
    const overlay = screen.getByText('Test Modal').closest('[class*="fixed inset-0"]')
    if (overlay) {
      fireEvent.click(overlay)
      expect(handleClose).toHaveBeenCalledTimes(1)
    }
  })

  it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
    const handleClose = vi.fn()
    render(
      <Modal open={true} title="Test Modal" onClose={handleClose} closeOnOverlayClick={false}>
        <p>Modal content</p>
      </Modal>
    )
    
    const overlay = screen.getByText('Test Modal').closest('[class*="fixed inset-0"]')
    if (overlay) {
      fireEvent.click(overlay)
      expect(handleClose).not.toHaveBeenCalled()
    }
  })

  it('calls onClose when ESC key is pressed', () => {
    const handleClose = vi.fn()
    render(
      <Modal open={true} title="Test Modal" onClose={handleClose} closeOnEscape={true}>
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(
      <Modal open={true} title="Test Modal" className="custom-modal">
        <p>Modal content</p>
      </Modal>
    )
    
    const modal = screen.getByText('Test Modal').closest('[class*="custom-modal"]')
    expect(modal).toHaveClass('custom-modal')
  })

  it('renders without title when title is not provided', () => {
    render(
      <Modal open={true}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByText('Modal content')).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('hides close button when showCloseButton is false', () => {
    render(
      <Modal open={true} title="Test Modal" showCloseButton={false}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByLabelText('关闭')).not.toBeInTheDocument()
  })
}) 