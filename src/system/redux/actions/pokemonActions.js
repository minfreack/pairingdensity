import {pokemonSchema} from "../schema/pokemonSchema";

export const setPokemons = payload => ({
    type: pokemonSchema.pokemons,
    payload
})

export const setPage = payload => ({
    type: pokemonSchema.page,
    payload
})