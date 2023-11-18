import React,{ useState } from "react";
import "./App.css";
import logo from "./assets/MisPelis.png";
import BuscadorComponent from "./components/BuscadorComponent";
import CrearPeliComponent from "./components/CrearPeliComponent";
import PelisComponent from "./components/PelisComponent";

function App() {
  const [movies, setMovies] = useState([]);
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="layout">
      {/* CABECERA */}
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* BARRA DE NAVEGACION */}
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <section className="content">
        <PelisComponent
          mensaje={mensaje}
          setMensaje={setMensaje}
          movies={movies}
          setMovies={setMovies}
        />
      </section>

      {/* BARRA LATERAL */}
      <aside className="lateral">
        <BuscadorComponent setMovies={setMovies} setMensaje={setMensaje} />
        <CrearPeliComponent movies={movies} setMovies={setMovies} />
      </aside>

      {/* PIE DE PAGINA */}
      <footer className="footer">
        &copy; <p> MisPelis - </p>
        <a href="https://dburbano.com" target="_blank" rel="noreferrer">
          dburbano.com
        </a>
      </footer>
    </div>
  );
}

export default App;
