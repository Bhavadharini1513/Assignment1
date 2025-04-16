const productList = document.getElementById("productList");

const products = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1",
    price: 109.95,
    image: "img/id1.jpg",
  },

  {
    id: 2,
    name: "Mens Special Cotton Jacket ",
    price: 55.99,
    image: "img/id2.jpg",
  },
  {
    id: 3,
    name: "Special Mens Casual Slim Fit",
    price: 15.99,
    image: "img/id3.jpg",
  },
  {
    id: 4,
    name: "John Hardy Women's Bracelet",
    price: 695,
    image: "img/id4.jpg",
  },
  {
    id: 5,
    name: "Solid Gold Petite Micropave",
    price: 168,
    image: "img/id5.jpg",
  },
  {
    id: 6,
    name: "White Gold Plated Princess",
    price: 9.99,
    image: "img/id6.jpg",
  },
  {
    id: 7,
    name: "Pierced Owl Rose Gold Plated",
    price: 10.99,
    image: "img/id7.jpg",
  },
  {
    id: 8,
    name: "GameSir T7 window 11/10",
    price: 105.55,
    image: "img/id8.jpeg",
  },
  {
    id: 9,
    name: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 250,
    image: "img/id9.jpeg",
  },
  {
    id: 10,
    name: "Elegant Purple Leather Loafers",
    price: 500,
    image: "img/id10.jpeg",
  },
  {
    id: 11,
    name: "Elegant Golden-Base Stone Top Dining Table",
    price: 1500,
    image: "img/id11.jpeg",
  },
  {
    id: 12,
    name: "Sleek Smartwatch with Vibrant Display",
    price: 700,
    image: "img/id12.jpeg",
  },
];

function displayProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">+ Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  const exists = cart.find((item) => item.id === id);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

displayProducts();
