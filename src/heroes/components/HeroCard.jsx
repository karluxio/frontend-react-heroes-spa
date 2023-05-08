import { Link } from "react-router-dom"

const CharactersByHero = ({ characters, alter_ego }) => {
  if (characters === alter_ego) return <></>
  return <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imageUrl = `/heroes/${id}.jpg`

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imageUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`https://karluxio.github.io/frontend-react-heroes-spa/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}