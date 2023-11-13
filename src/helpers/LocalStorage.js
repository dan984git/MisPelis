export const guardarEnStorage = (key, elemento) => {
  // Conseguir los elementos que ya tenemos en localStorage
  let elementos = JSON.parse(localStorage.getItem(key));

  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    elementos.push(elemento);
  } else {
    elementos = [elemento];
  }

  // Guardar en el localStorage
  localStorage.setItem(key, JSON.stringify(elementos));

  // Devolver objeto guardado
  return elemento;
};

export const guardarPrimerosElementos = (key, elementos) => {
  localStorage.setItem(key, JSON.stringify(elementos));
};

export const eliminarElemento = (key, id) => {
  let elementos = JSON.parse(localStorage.getItem(key));

  let nuevosElementos = elementos.filter((peli) => peli.id !== id);

  localStorage.setItem(key, JSON.stringify(nuevosElementos));

  return nuevosElementos;
};

export const editarElemento = (key, movie) => {
  let elementos = JSON.parse(localStorage.getItem(key));

  let indice = elementos.findIndex((peli) => peli.id === movie.id);

  let movieUpdate = {
    id: movie.id,
    title: movie.title,
    image: movie.image,
    description: movie.description,
  };

  elementos[indice] = movieUpdate;

  localStorage.setItem(key, JSON.stringify(elementos));
  return elementos;
};

export const buscarElemento = (key, title) => {
  let elementos = JSON.parse(localStorage.getItem(key));

  let t = title.toLowerCase();

  let nuevosElementos = [];

  elementos.forEach((peli) => {
    let f = peli.title.toLowerCase().includes(t);
    if (f) {
      nuevosElementos.push(peli);
    }
  });

  return nuevosElementos;
};
