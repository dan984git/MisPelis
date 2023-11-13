import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { buscarElemento } from "../helpers/LocalStorage.js";

const BuscadorComponent = ({ setMovies, setMensaje }) => {
  let delayTimer;

  const searchMovie = (e) => {
    e.preventDefault();

    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      if (e.target.value === "") {
        let elementos = JSON.parse(localStorage.getItem("pelis"));
        setMovies(elementos);
        return;
      }

      let movie = buscarElemento("pelis", e.target.value);

      if (movie) {
        if (movie.length <= 0) {
          setMensaje("No se ha encontrado ninguna coincidencia");
          setMovies(movie);
        } else {
          setMovies(movie);
        }
      }
    }, 1000);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <label className="input-container">
        <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
        <input
          onChange={(e) => searchMovie(e)}
          autoComplete="off"
          name="busqueda"
          id="busqueda"
          type="text"
        />
      </label>
    </div>
  );
};

export default BuscadorComponent;
