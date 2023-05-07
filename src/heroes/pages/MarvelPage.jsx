import { HeroesList } from "../components";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const MarvelPage = () => {
  console.log(getHeroesByPublisher("Marvel Comics"));
  return (
    <>
      <h1>Marvel</h1>
      <hr />
      <HeroesList publisher="Marvel Comics" />
    </>
  )
}