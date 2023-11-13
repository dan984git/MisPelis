import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { eliminarElemento } from "../helpers/LocalStorage.js";
import EditarComponent from "./EditarComponent.jsx";

const PelisComponent = ({ mensaje, setMensaje, movies, setMovies }) => {
  const [edit, setEdit] = useState(false);
  const [movie, setMovie] = useState({});

  const getMovies = () => {
    let elementos = JSON.parse(localStorage.getItem("pelis"));
    if (elementos) {
      setMovies(elementos);
      if (elementos.length <= 0) {
        setMensaje("No existen películas");
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    let elementos = JSON.parse(localStorage.getItem("pelis"));
    if (elementos) {
      if (elementos.length <= 0) {
        setMensaje("No existen películas");
      }
    } else {
      setMensaje("No existen películas");
    }
  }, [movies]);

  const deleteMovie = (id) => {
    let newMovies = eliminarElemento("pelis", id);
    setMovies(newMovies);
  };

  const editMovie = (movie) => {
    setEdit(true);
    setMovie(movie);
  };
  return (
    <>
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return (
            <article
              key={movie.id}
              className="peli-item"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="card-content"></div>
              <div className="card-body">
                <div className="card-title">
                  <h3 className="title">{movie.title}</h3>
                </div>
                <div className="card-description">
                  <p className="description">{movie.description}</p>
                </div>
                <div className="card-footer">
                  <button className="edit" onClick={() => editMovie(movie)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </div>
            </article>
          );
        })
      ) : (
        <p>{mensaje}</p>
      )}
      {edit && (
        <EditarComponent
          movie={movie}
          setEdit={setEdit}
          setMovies={setMovies}
        />
      )}
    </>
  );
};

export default PelisComponent;
