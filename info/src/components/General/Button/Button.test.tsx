import { render, screen } from '@testing-library/react'
import ue from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  test('rendered as button', () => {
    render(<Button>ぼたん</Button>)
    expect(screen.getByRole('button', { name: 'ぼたん' })).toBeInTheDocument()
  })

  test('onClick fires', () => {
    const fn = jest.fn()
    render(<Button onClick={fn}>ぼたん</Button>)
    ue.click(screen.getByRole('button', { name: 'ぼたん' }))
    expect(fn).toHaveBeenCalled()
  })
})
