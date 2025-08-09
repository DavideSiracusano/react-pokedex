import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { routes } from "./assets/routes";
import "./App.css";
import ChangeColor from "./assets/ChangeColor";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <>
      <ChangeColor />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
