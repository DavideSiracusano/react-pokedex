import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokémon not found</div>;
  }

  return (
    <>
      <button
        className="btn btn-dark m-2"
        onClick={() => (window.location.href = "/")}
      >
        &lt;&lt;
      </button>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="pokemon-name ms-3">{pokemon.name}</h2>
      </div>

      <div className="pokemon-detail d-flex flex-column align-items-center">
        <h5>ID Pokédex: {pokemon.id}</h5>
        <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <p>Height: {pokemon.height / 10} m</p>

        <audio
          className="audio my-4"
          controls
          src={pokemon.cries.latest}
          type="audio/ogg"
        ></audio>

        {/* Contenitore immagini normali */}
        <div className="images-row d-flex flex-wrap gap-3 my-3">
          <img
            style={{ width: "200px" }}
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} front`}
          />
          <img
            style={{ width: "200px" }}
            src={pokemon.sprites.back_default}
            alt={`${pokemon.name} back`}
          />

          <img
            style={{ width: "200px" }}
            src={pokemon.sprites.front_shiny}
            alt={`${pokemon.name} shiny front`}
          />
          <img
            style={{ width: "200px" }}
            src={pokemon.sprites.back_shiny}
            alt={`${pokemon.name} shiny back`}
          />
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
