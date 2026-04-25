const products = [
    { id: 1, name: "Laptop", price: 50000, image: "laptop.jpg" },
    { id: 2, name: "Phone", price: 20000, image: "C:\Users\Administrator\Desktop\Amazonclone\phone.html" },
    { id: 3, name: "Headphones", price: 2000, image: "headphone.jpg" },
    { id: 4, name: "Shoes", price: 3000, image: "shoes.jpg" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function renderProducts(items) {
    productList.innerHTML = "";
    items.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    cart.push(id);
    cartCount.textContent = cart.length;
}

// Search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    renderProducts(filtered);
});

renderProducts(products);
