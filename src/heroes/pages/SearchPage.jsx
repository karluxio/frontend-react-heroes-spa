import { useNavigate, useLocation } from 'react-router-dom'
import queryString from "query-string"

import { useForm } from '../../hook/useFetch'
import { HeroCard } from '../components'

import { getHeroesByName } from '../helpers'

export const SearchPage = () => {


  const navigate = useNavigate()
  const location = useLocation()

  const { q = "" } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const { onInputChange, searchText } = useForm({
    searchText: q
  })

  const onSubmit = (e) => {
    e.preventDefault()

    navigate(`?q=${searchText}`)
  }

  return (
    <div className='animate__animated animate__fadeIn'>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="search a hero like spiderman..."
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            searchText === ''
              ? <div className="alert alert-primary">Search a hero</div>
              : heroes.length === 0 && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? "" : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </div>
  )
}