import React from 'react';
import List from "./list";
import pokeapi from '../assets/descarga.png'
import {Link} from "react-router-dom";
function Dashboard() {
    const random = Math.floor(Math.random() * 150)

  return (
      <section className="flex items-center w-full h-screen justify-center gap-4">
        <div className="w-96 items-center h-[70%] rounded-lg bg-white shadow-2xl flex flex-col p-10">
            <img className="w-64 h-24" src={pokeapi} alt="Logo"/>
            <h2 className="pt-4 text-lg font-semibold">Select a Pokemon</h2>
            <Link to={`details/${random}`}>
                <img className="w-80 h-80" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`}  alt="Pokemon"/>
            </Link>
        </div>
          <div className="w-[40rem] h-[70%] rounded-lg bg-white shadow-2xl flex flex-col p-10">
            <List/>
        </div>
      </section>
  );
}

export default Dashboard;
