import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const id = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link
      to={`/pokemon/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <h2>{name}</h2>
      <h6>ID: {id}</h6>
      <img src={imageUrl} alt={name} />
    </Link>
  );
};

export default PokemonCard;
