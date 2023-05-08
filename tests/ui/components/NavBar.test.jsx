import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/ui/components/NavBar'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('NavBar', () => {

  const contextValue = {
    logged: true,
    user: {
      id: 1,
      name: 'lux'
    },
    logout: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render user name when is authenticated", () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    // screen.debug()
    expect(screen.getByText("lux")).toBeTruthy()
  })

  it("should redirect to login when logout button is clicked", () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const button = screen.getByRole("button")
    fireEvent.click(button)

    // screen.debug()
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true })
  })
})