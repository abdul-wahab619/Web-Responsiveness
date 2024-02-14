// show real products

var products = [
  {
    name: "Brown Chair",
    headline: "A Soft Comfort",
    price: "15,000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "White Chair",
    headline: "Traditional chair for Kings",
    price: "20,000",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Office chair",
    headline: "A workbalance for Offices",
    price: "18,000",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Old chair",
    headline: "Traditions maintain",
    price: "18,000",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww",
  },
];

var popular = [
  {
    name: "Red Chair",
    headline: "A Soft Comfort",
    price: "15,000",
    image:
      "https://images.unsplash.com/photo-1585298014716-62d4843bedd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlZCUyMGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Yellow Chair",
    headline: "Traditional chair for Kings",
    price: "20,000",
    image:
      "https://images.unsplash.com/photo-1552664467-e8727a018a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHllbGxvdyUyMGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Blue chair",
    headline: "A workbalance for Offices",
    price: "18,000",
    image:
      "https://images.unsplash.com/photo-1604325408131-f6bc84d7c8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qmx1ZSUyMGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Green chair",
    headline: "Traditions maintain",
    price: "18,000",
    image:
      "https://images.unsplash.com/photo-1585845786337-2b2b17c55fb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
];

var cart = [];

function addProduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `  <div class="product w-fit rounded-xl p-2 bg-white">
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}" alt="image"/>
      </div>
      <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">
          ${product.name}
        </h1>
        <div class="flex justify-between w-full items-center mt-2">
          <div class="w-1/2">
            <h3 class="font-semibold opacity-20">${product.headline}</h3>
            <h4 class="font-semibold mt-2">${product.price} $</h4>
          </div>
          <button class=" add w-10 h-10 rounded-full shader text-yellow-400 data-index="${index}" ">
            <i class="add ri-add-line data-index="${index}""></i>
          </button>
        </div>
      </div>
    </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}
function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `   <div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[40%] h-[40%] flex-shrink-0"
  >
    <div
      class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src="${product.image}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-zinc-400 text-sm font-semibold opacity-20">
        ${product.headline}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
    </div>
  </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}
function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
      }
    });
}
function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";
  });
}
showCart();
addToCart();
addPopularProducts();
addProduct();
// show real popular products

// on click of products add button add it  to the cart
