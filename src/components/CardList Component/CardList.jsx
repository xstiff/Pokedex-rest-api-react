import { Card } from "../Card Component/Card"
import { useEffect } from "react";
import { useState } from "react";
import {Search} from "../Search Component/Search";

import { PokemonRequest } from "../../utility/PokemonRequest";
import "./CardList.scss";

export const CardList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonCopy, setPokemonCopy] = useState([]);
  
  
    const UpdatePokemonList = async (x = 10, y = 20) => {
      const Response = await PokemonRequest();
      setPokemonCopy(Response.cards.slice(x,y));
      setPokemons(Response.cards.slice(x,y));
    }
  
    useEffect(() => {
      UpdatePokemonList(10, 20); // 10 = start index, 20 = end index
    }, []);
  
  
    const HandleSearch = (e) => { 
        const fitleredPokemon = pokemonCopy.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(e.toLowerCase());
        }
        );
        setPokemons(fitleredPokemon);
    }
    return <>
            <Search HandleSearch={HandleSearch}/>
            <div className="card-flex-container">
            
            {pokemons.map((pokemon, index) => {
                return <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={index}/>
            }
            )}
            </div>
         </>

}
