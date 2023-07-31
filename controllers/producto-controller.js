
const nuevoProducto = (nombre, imagen, precio, id) => {
    const card = document.createElement("div")
    const contenido = `<div class="producto__card">
    <div class="producto__card__container">
      <img class="producto__img" src="${imagen}"  alt="product image" />
    </div>
    <p class="producto__xyz__titulo">${nombre}</p>
    <p class="producto__precio">${precio}</p>
    <p class="producto__card__link ${id}">Ver producto</p>
  </div>`
  card.innerHTML = contenido
  card.dataset.id = id
  return card
}
const productos = document.querySelector(["data-product"])