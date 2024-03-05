import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css'
import Pokemon from "../../Pokemon/Pokemon";
function PokemonList ()
{
  const POKEDEX_URL='https://pokeapi.co/api/v2/pokemon';
   const [isLoading, setIsLoading]= useState(true);
   const[pokemonList,setPokemonList]=useState([]);
    async function downloadPokemons()
    {
        const response = await axios.get(POKEDEX_URL); // THIS DOWNLOADS LIST OF 20 POKEMONS

        const pokemonResult = response.data.results; // WE GET THE ARRAY OF POKEMONS IN THIS NAME AND URL OF THEIR DETAILS
        // console.log(response.data);
        // console.log(pokemonResult)
        const pokemonResultPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url)) // WE GO ON EACH POKEMON AND GET DETAILS OF POKEMON USING URL  AND STORED IN ARRAY (MAP FUNCTION RETURNS ARRAY)
      //  console.log(pokemonResult)
      const pokemonData = await axios.all(pokemonResultPromise); // THIS WILL RETURN ALL INFO WHEN ALL DATA IS LOADED;
      // console.log(pokemonData);
      const res = (pokemonData.map((pokeData)=>
      {
        const pokemon = pokeData.data;

        return {pokemonName:pokemon.name,
          pokemonId: pokemon.id,
        pokemonImage: pokemon.sprites.other.dream_world.front_default,
       pokemonTypes:pokemon.types,
      }
      })) // HERE WE ARE RETURNING INFO OF EACH POKEMON
      setPokemonList(res); // WE SET THE LIST OF 20 POKEMONS
      console.log(res)
 
        setIsLoading(false);
    }
    useEffect(()=>{
      downloadPokemons()
    },[])
return (

   <div className="pokemon-List-Wrapper">
     {isLoading?'Loading....':pokemonList.map((p)=><Pokemon name={p.pokemonName} image ={p.pokemonImage} id={p.pokemonId}></Pokemon>)
     }
   </div>
   

   )
}
export default PokemonList;