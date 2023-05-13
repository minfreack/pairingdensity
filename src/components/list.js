import React, {useEffect} from 'react';
import axios from "axios";
import {setPage, setPokemons} from "../system/redux/actions/pokemonActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import pokeball from '../assets/pokeball.png'

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset='
function List() {

    const dispatch = useDispatch();
    const {pokemon} = useSelector(rdx => rdx)

    const {pokemonsResult = {}, page = 0} = pokemon

    const getPokemons = async() => {
        try{
            const {data} = await axios.get(`${url}${page * 10 }`)
            dispatch(setPokemons(data.results))
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getPokemons()
    },[page])
  return (
      <div className="flex flex-col justify-between h-full">
          <div className="gap-2 flex flex-col">
              {
                  pokemonsResult?.length > 0 ?
                      pokemonsResult?.map((individualPokemon) => (
                          <Link key={individualPokemon?.name} to={`details/${individualPokemon?.url?.split('/')[6]}`}>
                              <div className="border-b-gray-200 border-[1px] relative rounded-lg p-1 bg-gray-50" >
                                  <p>{individualPokemon?.name}</p>
                                  <img src={pokeball} className="absolute h-6 w-6 right-3 top-1"/>
                              </div>

                          </Link>
                      )) : <h1>Not results</h1>
              }
          </div>
          <div className="flex gap-7 justify-center">
              {
                  page > 0 && (
                      <p className="font-semibold cursor-pointer" onClick={() => dispatch(setPage(page - 1))}>Atrás</p>
                  )
              }
              <p className="font-semibold">{page + 1}</p>
              {
                  page + 1 < 15 && (
                      <p className="font-semibold cursor-pointer" onClick={() =>dispatch(setPage(page + 1))}>Siguiente</p>
                  )
              }
          </div>
      </div>
  );
}

export default List;
