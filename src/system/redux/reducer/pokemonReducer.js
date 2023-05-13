import {pokemonSchema} from "../schema/pokemonSchema";


const initialState = {
    pokemonsResult: [],
    page: 0
}
export default (state = initialState, action) => {
    switch (action.type){
        case pokemonSchema.pokemons: return {
            ...state,
            pokemonsResult: action.payload
        }
        case pokemonSchema.page: return {
            ...state,
            page: action.payload
        }
        default:
            return state
    }
}