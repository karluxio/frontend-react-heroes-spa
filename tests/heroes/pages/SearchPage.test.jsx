import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { SearchPage } from '../../../src/heroes'

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('SearchPage', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render with default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    // screen.debug()
    expect(container).toMatchSnapshot()
  })

  it("should render batman and the input value like query string", () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe("batman")

    const img = screen.getByRole('img')
    expect(img.src).toContain('dc-batman.jpg')

    const divSearch = screen.getByLabelText('search-alert')
    expect(divSearch.innerHTML).toContain('Search a hero')

    const divError = screen.getByLabelText('error-alert')
    expect(divError.style.display).toContain('none')
  })

  it("should render an error if hero not exists", () => {
    render(
      <MemoryRouter initialEntries={['/search?q=rino']}>
        <SearchPage />
      </MemoryRouter>
    )

    const divAlert = screen.getByLabelText('search-alert')
    expect(divAlert.style.display).toContain('none')

    const divError = screen.getByLabelText('error-alert')
    expect(divError.style.display).toContain('')
  })

  it("should call navigate to move new screen", () => {

    const inputValue = 'superman'

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { name: 'searchText', value: `${inputValue}` } })
    fireEvent.submit(screen.getByLabelText('form'))

    expect(mockedUseNavigate).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith(`/search?q=${inputValue}`)
  })
})