import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  const filteredPokemons = pokemons.filter((pokemon) => {
    const id = pokemon.url.split("/").filter(Boolean).pop();
    const search = searchTerm.toLowerCase();
    return pokemon.name.toLowerCase().includes(search) || id.includes(search);
  });

  return (
    <Container className="d-flex flex-column align-items-center">
      <InputGroup className="mb-3" style={{ width: "100%", maxWidth: "500px" }}>
        <Form.Control
          className="form-control"
          type="text"
          placeholder="Search Pokémons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "20px", padding: "8px", fontSize: "16px" }}
        />
      </InputGroup>

      <Row className="pokemon-list d-flex justify-content-center align-items-center">
        {filteredPokemons.map((pokemon) => (
          <Col
            key={pokemon.name}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="pokemon-card border rounded p-2"
            style={{ minHeight: "220px", minWidth: "200px" }}
          >
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
