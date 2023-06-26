import {render , screen} from '@testing-library/react'
import App from './App'

test('renders text github', () => {
  render(<App />)
  const nameElement = screen.getByText(/github picture/i)
  expect(nameElement).toBeInTheDocument()
});