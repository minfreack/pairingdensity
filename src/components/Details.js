import React from 'react';
import {Link, useParams} from "react-router-dom";
import usePokemons from "../system/hooks/usePokemons";



function Details() {
  let { id } = useParams();

  const {pokemonDetails} = usePokemons({id});

  return (
      <section className="flex overflow-y-scroll items-center flex-col md:flex-row w-screen h-screen md:justify-center gap-4">
          <div className="w-full md:w-96 items-center justify-between h-[10rem] md:h-[70%] rounded-lg bg-white shadow-2xl flex flex-col md:p-10">
          <h1 className="text-xl md:text-3xl font-semibold">{pokemonDetails.name}</h1>
              <p className="font-semibold">Id: {pokemonDetails.id}</p>
          <img className="w-20 h-20 md:w-64 md:h-64" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}  alt="Pokemon"/>
        </div>
          <div className="w-screen py-4 px-4 md:w-[40rem] md:h-[70%] rounded-lg bg-white shadow-2xl flex flex-col md:p-10">
              <Link to="/">
                  <p>Go back</p>
              </Link>
              <div className="flex flex-col justify-center gap-5">
                  <h2 className="text-xl font-semibold self-center">Details</h2>
                  <div className="flex flex-col md:flex-row justify-between">
                      <p className="font-semibold">Base Experience: {pokemonDetails?.base_experience}</p>
                      <p className="font-semibold">Height: {pokemonDetails?.height} m.</p>
                      <p className="font-semibold">Weight: {pokemonDetails?.weight} kg.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                      <p className="font-semibold">Stats</p>
                      {
                          pokemonDetails?.stats?.map((stat) => (
                              <div className="flex flex-col md:flex-row gap-2 flex-wrap" key={stat.stat.name}>
                                  <p className="w-32">{stat.stat.name}</p>
                                  <div className="w-full md:w-64 relative bg-blue-200 h-6 text-center">
                                      <div style={{width: `${Math.round(100 * stat?.base_stat / 300)}%`}} className="h-full bg-red-400"/>
                                      <p className="absolute top-0 left-[40%]">{stat.base_stat}/ 300</p>
                                  </div>
                              </div>
                          ))
                      }
                  </div>
                  <div className="flex gap-10">
                      <div className="flex flex-col gap-2">
                          <p className="font-semibold">Types</p>
                          {
                              pokemonDetails?.types?.map((type) => (
                                  <div className="flex gap-2 flex-wrap" key={type.type.name}>
                                      <p className="w-32">{type.type.name}</p>
                                  </div>
                              ))
                          }
                      </div>
                      <div className="flex flex-col flex-wrap gap-2">
                          <p className="font-semibold">Moves</p>
                          {
                              pokemonDetails?.moves?.slice(0, 3)?.map((move) => (
                                  <div className="flex gap-2 flex-wrap" key={move.move.name}>
                                      <p className="w-32">{move.move.name}</p>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              </div>
        </div>
      </section>
  );
}

export default Details;
