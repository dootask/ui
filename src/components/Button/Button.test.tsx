import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'
import { UserIcon } from '@heroicons/react/24/outline'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<Button loading>Loading Button</Button>)
    expect(screen.getByText('加载中...')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when loading', () => {
    render(<Button loading>Loading Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders with left icon', () => {
    render(
      <Button leftIcon={<UserIcon data-testid="user-icon" />}>
        With Icon
      </Button>
    )
    expect(screen.getByTestId('user-icon')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('renders as full width when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>)
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })
}) 