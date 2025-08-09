import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/pokemon/:id", element: <PokemonDetail /> },
];
