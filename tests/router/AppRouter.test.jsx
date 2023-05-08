import { render, screen } from '@testing-library/react'
import { AppRouter } from '../../src/router/AppRouter'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'

describe('AppRouter', () => {
  it("should render login if not authenticated", () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    // screen.debug()
    expect(screen.getByRole('heading', { name: /login/i })).toBeTruthy()
  })

  it("should return marvel page if is authenticated", () => {

    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'lux'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    // screen.debug()
    expect(screen.getByRole('heading', { name: /marvel/i })).toBeTruthy()

  })
})