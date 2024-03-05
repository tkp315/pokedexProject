import Search from "../Search/Search"
import './Pokedex.css'
import PokemonList from "./PokemonList/PokemonList"
function Pokedex ()
{

    return (
    <div className="pokedex-Wrapper">
        <h1>Pokedex</h1>
        <Search></Search>
        <PokemonList></PokemonList>
    </div>)
}
export default Pokedex