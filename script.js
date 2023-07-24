let toggleSearchBtn=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    toggleSearchBtn.classList.toggle('active');
}
let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
}