import React from "react";
import { useState } from "react";
import { editarElemento } from "../helpers/LocalStorage.js";

const EditarComponent = ({ movie, setEdit, setMovies }) => {
  const [focusedTitle, setFocusedTitle] = useState(false);
  const [focusedImage, setFocusedImage] = useState(false);
  const msgTitle = "Debes ingresar un nombre de pelicula entre 3-50 caracteres";
  const msgImage = "Debes agregar una URL valida";
  const title = "Añadir Película";

  const getEditForm = (e) => {
    e.preventDefault();
    let data = e.target;
    let mov = {
      id: movie.id,
      title: data.title.value,
      image: data.image.value,
      description: data.description.value,
    };
    let editedMovies = editarElemento("pelis", mov);
    setMovies(editedMovies);
    setEdit(false);
  };

  const cancelarModal = () => {
    setEdit(false);
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

  return (
    <div className="modalEditCont">
      <form onSubmit={getEditForm} className="editMovie">
        <h3 className="title">Editar Película</h3>
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
          defaultValue={movie.title}
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
          defaultValue={movie.image}
        />
        <span className="errorMsg">{msgImage}</span>
        <textarea
          name="description"
          id="description"
          placeholder="Descripción (Opcional)"
          defaultValue={movie.description}
        ></textarea>
        <div className="modalBtn">
          <input type="submit" className="btnInput" value="Guardar" />
          <input
            onClick={cancelarModal}
            type="button"
            className="btnInput"
            value="Cancelar"
          />
        </div>
      </form>
    </div>
  );
};

export default EditarComponent;
