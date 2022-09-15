//LLAMADO

const cartLogo = document.querySelector(".cartLogo");
const cardProducts = document.querySelector(".products");
const colorFilter = document.querySelectorAll(".filter")
const cartCont = document.getElementById("cart-cont")
const cartMenu = document.querySelector(".cart-menu")
const categories = document.querySelector(".categorias__cards__container")
const categoriesList = document.querySelectorAll('.categorias__cards');
const cardsCart = document.querySelector('.cards-cart');
const totalDesc = document.getElementById("total-products")
const btnComprar = document.getElementById("btn-comprar")
const totalProductsCart = document.querySelector(".cart-product-list")
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

//RENDERIZAMOS LOS PRODUCTOS DEL FILTER


const renderProducto =  producto => {
    const {
        id,
        name,
        description,
        price,
        category,
        cardImg,
    } = producto;
    return `
    <div class="card-product">
    <img src= "${cardImg}"class="product-image"alt="product-image"/>
        <div class="info-product">
            <h4>${name}</h4>
            <p>${description}</p>
        </div>
        <div class="add-product">
            <p class="product-price">$${price}</p>
            <button class="btn-product"
              data-id='${id}'
              data-name='${name}'
              data-price='${price}'
              data-img='${cardImg}'
              data-description='${description}'>Agregar</button>
        </div>
    </div>
    `;
};

//FILTRAMOS LOS PRODUCTOS CON LA SECCION DE CATEGORIAS

const filterProducts  = (e)=> {
    const categorySelected = e.target.dataset.category;
    const categoryArray = [];
    productsInfo.forEach(product =>{
        if(categorySelected===product.category){ 
           categoryArray.push(product)
           return; 
        }
    })
    cardProducts.innerHTML="";
    renderProductos(categoryArray);
}
const renderProductos = (productsInfo) => {
    cardProducts.innerHTML = productsInfo.map(renderProducto).join('');
};

//toggle carrito

function toggleCarrito() {
    let x = document.getElementById("cart-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//renderizar en cart

const renderCartProduct = productoCart => {
        const {
        id,
        name,
        description,
        price,
        category,
        cardImg,
        cantidad,
    } = productoCart;
    return`
    <div class="card-desc">
          <div class="img-card">
            <img src="${cardImg}" alt="">
          </div>
          <div class="card-desc-medio">
          <h5>${name}</h5>
          <p>${description}</p>
          <p class="card-price" id="card-price">$${price*cantidad}</p>
          </div>
          <div class="suma-resta">
            <button class="resta"
              data-id='${id}'
              data-cantidad='${cantidad}'>-</button>
            <span class ="item-cantidad">${cantidad}</span>
            <button class="suma" id="suma"
              data-id='${id}'
              data-cantidad='${cantidad}' >+</button>
          </div>
        </div>`
}

//PARA FINALIZAR LA COMPRA

const cartBuy = ()=>{
  if (window.confirm("desea realizar la compra?")){
    cartMenu.innerHTML=""
    localStorage.removeItem("cart")
    location.reload()
  }

}

//LA SUMA DEL TOTAL DE LOS PRECIOS
const showTotal = cartProducts => {
  totalDesc.innerHTML = `${cartProducts
    .reduce((acc, cur) => acc + Number(cur.price) * cur.cantidad, 0)
    .toFixed(2)} $`;
};

//FUNCION DE RENDERIZADO DE LOS PRODUCTOS
const renderCart = (products) =>{
    if(!products.length){
        cardsCart.innerHTML = `<p class="vacio">No hay productos en el carro</p>`
        cartCont.innerHTML= `${0}`
        totalProductsCart.innerHTML=`productos en el carro : ${0}`
        btnComprar.style.display = "none";
        return;
    }
    cardsCart.innerHTML = products.map(renderCartProduct).join('')
    cartCont.innerHTML= `${products.length}`
    totalProductsCart.innerHTML=`productos en el carro : ${products.length}`
    btnComprar.style.display = "block"
}
const agregarProducto = (e) => {
  if(!e.target.classList.contains('btn-product')) return;
  const productCarrito = {
    id: e.target.dataset.id,
    name: e.target.dataset.name,
    price: e.target.dataset.price,
    cardImg: e.target.dataset.img,
    description: e.target.dataset.description,
  }

   const existeItemEnCart = cart.find(item => item.id === productCarrito.id);

   if(existeItemEnCart){
     cart = cart.map((item) => {
         return item.id === productCarrito.id
         ? {... item, cantidad: Number(item.cantidad) + 1}
         : item;
        });
   } else { 
     cart = [...cart, { ...productCarrito, cantidad: 1 }];
   }
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
};


//botones mas y menos


const handleQuantity = e => {
  if (e.target.classList.contains('resta')) {
    const existeItemEnCart = cart.find(item => item.id === e.target.dataset.id);

    // Si tocamos en un item que tine una sola cantidad
    if (existeItemEnCart.cantidad===1) {
      if (window.confirm('¿Desea Eliminar el producto del carrito?')) {
        cart = cart.filter(prod => prod.id !== existeItemEnCart.id);
        saveLocalStorage(cart);
        renderCart(cart);
        showTotal(cart);
        return;
      }
      // Si no
    }
    cart = cart.map(item => {
      return item.id === existeItemEnCart.id
        ? { ...item, cantidad: Number(item.cantidad) - 1 }
        : item;
    });

    // Si se toco el boton de up
  } else if (e.target.classList.contains('suma')) {
    const existeItemEnCart = cart.find(item => item.id === e.target.dataset.id);

    cart = cart.map(item => {
      return item.id === existeItemEnCart.id
        ? { ...item, cantidad: Number(item.cantidad) + 1 }
        : item;
    });
  }
  // Para todos los casos
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
};

function init() {
    categories.addEventListener("click",filterProducts)
    document.addEventListener('DOMContentLoaded', renderCart(cart));
    cardsCart.addEventListener('click', handleQuantity);
    renderProductos(productsInfo);
    cardProducts.addEventListener('click', agregarProducto);
    btnComprar.addEventListener("click",cartBuy);
}
init();