import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth'
import { Routes, Route, MemoryRouter } from 'react-router-dom'

describe('PublicRoute', () => {
  it("should render children if not logged", () => {

    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText("public route")).toBeTruthy()
  })

  it("should render main page if logged", () => {

    const contextValue = {
      logged: true,
      user: {
        name: "lux",
        id: 123
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>

          <Routes>

            <Route
              path='/login'
              element={
                <PublicRoute>
                  <h1>public route</h1>
                </PublicRoute>
              }
            />

            <Route path='/' element={<h1>Marvel page</h1>} />

          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )

    // screen.debug()

    expect(screen.getByRole("heading", { level: 1, name: /marvel/i }))
  })
})