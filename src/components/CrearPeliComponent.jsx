import React, { useState } from "react";
import {
  guardarEnStorage,
  guardarPrimerosElementos,
} from "../helpers/LocalStorage.js";
import pelisStandar from "../files/standarMovies.json";

const CrearPeliComponent = ({ movies, setMovies }) => {
  const [pelicula, setPelicula] = useState({});
  const [focusedTitle, setFocusedTitle] = useState(false);
  const [focusedImage, setFocusedImage] = useState(false);
  const msgTitle = "Debes ingresar un nombre de pelicula entre 3-50 caracteres";
  const msgImage = "Debes agregar una URL valida";
  const title = "Añadir Película";

  const savePelisStandar = () => {
    guardarPrimerosElementos("pelis", pelisStandar);
    setMovies(pelisStandar);
  };

  const handleFocusTitle = (e) => {
    if (e.target.value !== "") {
      setFocusedTitle(true);
    }
  };

  const handleFocusImage = (e) => {
    if (e.target.value !== "") {
      setFocusedImage(true);
    }
  };

  const getDataForm = (e) => {
    e.preventDefault();
    let data = e.target;
    let movie = {
      id: new Date().getTime(),
      title: data.title.value,
      image: data.image.value,
      description: data.description.value,
    };
    setPelicula(movie);

    // Actualizar
    setMovies((elementos) => {
      return [...elementos, movie];
    });
    // GUARDAR ALMACENAMIENTO LOCAL
    guardarEnStorage("pelis", movie);

    //
  };

  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      <form onSubmit={getDataForm} className="addMovie">
        <input
          onBlur={handleFocusTitle}
          className="inpMovie"
          required
          name="title"
          id="title"
          type="text"
          placeholder="Título"
          pattern=".{3,50}"
          focused={focusedTitle.toString()}
        />
        <span className="errorMsg">{msgTitle}</span>
        <input
          onBlur={handleFocusImage}
          className="inpMovieImage"
          required
          name="image"
          id="image"
          type="text"
          placeholder="Imagen (URL)"
          focused={focusedImage.toString()}
        />
        <span className="errorMsg">{msgImage}</span>
        <textarea
          name="description"
          id="description"
          placeholder="Descripción (Opcional)"
        ></textarea>
        <input type="submit" className="btnInput" value="Guardar" />
      </form>
      {movies.length === 0 && (
        <button onClick={savePelisStandar} type="button" className="btnSave">
          Guardar Películas Default
        </button>
      )}
    </div>
  );
};

export default CrearPeliComponent;
