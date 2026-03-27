import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { expect, test, vi } from 'vitest'

// Mock next/font/local since it doesn't work well in Vitest
vi.mock('next/font/local', () => ({
  default: () => ({
    className: 'mock-mao-font',
    style: { fontFamily: 'mock-mao-font' },
  }),
}))

test('页面应包含诗词标题、作者和完整诗句', () => {
  render(<Home />)
  
  // 检查视觉与 SEO 标题都包含关键词
  expect(screen.getAllByText(/七律·答友人/).length).toBeGreaterThan(0)
  
  // 检查作者
  expect(screen.getAllByText(/毛泽东/).length).toBeGreaterThan(0)
  
  // 检查关键诗句
  expect(screen.getAllByText(/九嶷山上白云飞/).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/芙蓉国里尽朝晖/).length).toBeGreaterThan(0)
})

test('页面应包含指向九嶷山景区的链接', () => {
  render(<Home />)
  const link = screen.getByRole('link', { name: /九嶷山景区/ })
  expect(link).toHaveAttribute('href', 'http://www.nyjiuyishan.com')
})
