import React from "react";
import PokemonList from "../components/PokemonList";
import PokeballGif from "../images/pokeball.gif";
const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-4" style={{ color: "#ffcc00" }}>
        Pokédex
        <img
          src={PokeballGif}
          alt="Pokéball"
          className="ms-2"
          style={{ width: "50px" }}
        />
      </h1>

      <h4>Welcome to the Pokédex app!</h4>
      <h4 className="mb-3">
        Here you can find information about your favorite Pokémon.
      </h4>
      <h4 className="mb-4 ">
        Use the search bar to find a Pokémon by name or number.
      </h4>
      <PokemonList />
    </div>
  );
};

export default Home;
