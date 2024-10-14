'use client'
import axios from "axios";
import { useEffect, useState } from "react";

interface Pokemons {
    name: string;
    url: string;
}

interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
    types: {
        type: {
            name: string;
        }
    }[]
}


export const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    useEffect(() => {
        async function getPokemon() {
            const response = await fetch("https:pokeapi.co/api/v2/pokemon?limit=20&offset=20");
            const data = await response.json();
            setPokemons(data.results);
            const results = data.results;
            console.log(results);


            results.forEach(async (pokemon: Pokemons) => {
                const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const pokeData = await poke.json()
                console.log(pokeData);
                // setPokemons({ p } => [...p, pokeData.data]);

            });
        }
        getPokemon();
    }, []);

    if (!pokemons) return <div>Pas d'information dans l'api</div>

    return (
        <div className="PokemonList">

            {/* <img src="" /> */}
        </div>
    )
}