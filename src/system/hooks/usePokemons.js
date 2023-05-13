import React, {useEffect, useState} from 'react';
import axios from "axios";

const urlDetails = 'https://pokeapi.co/api/v2/pokemon/';

function UsePokemons({id}) {
    const [pokemonDetails, setPokemonDetails] = useState({})
    const getPokemonDetails = async() => {
        try{
            const {data} = await axios.get(`${urlDetails}${id}`)
            setPokemonDetails(data)
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getPokemonDetails()
    },[])

    return {
        pokemonDetails
    }
}

export default UsePokemons;