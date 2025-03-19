const products = [
    {
      name: "Camiseta Clásica Blanca",
      price: 15.99,
      image: "./images/camiseta-blanca.jpg"
    },
    {
      name: "Camiseta Clásica Negra",
      price: 15.99,
      image: "./images/camiseta-negra.jpg"
    },
    {
      name: "Camiseta con Logo",
      price: 19.99,
      image: "images/camiseta-logo.jpg"
    },
    {
      name: "Camiseta con Diseño Abstracto",
      price: 22.99,
      image: "images/camiseta-abstracta.jpg"
    },
    {
      name: "Camiseta Clásica Gris",
      price: 15.99,
      image: "images/camiseta-gris.jpg"
    },
    {
      name: "Camiseta Clásica Azul",
      price: 15.99,
      image: "images/camiseta-azul.jpg"
    },
    {
        name: "Camiseta Clásica Rosa",
        price: 15.99,
        image: "images/camiseta-rosa.jpg"
    },
    {
    name: "Camiseta Clásica Verde",
    price: 15.99,
    image: "images/camiseta-verde.jpg"
    },
    
  ];
  
  const productsContainer = document.querySelector(".products");
  
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.classList.add("is-flex");
    productElement.classList.add("is-flex-direction-column");
    productElement.classList.add("is-align-items-center");
    productElement.classList.add("is-justify-content-center");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productElement);
  });