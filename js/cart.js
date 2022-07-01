const cartIcon = document.getElementById('checkout')
const button = document.querySelectorAll('.group-products__btn') // Product button
const price = document.querySelectorAll('#price') // Product price
const cart = document.getElementById('cart')
const cartCount = document.getElementById('cart-count')
const productTitle = document.querySelectorAll('.group-products__product-title')
const cartList = document.querySelector('.cart__list')
const totalSum = document.getElementById('total-sum')
const productImg = document.getElementsByClassName('onega__img')

let cartItems = []
let cartItemReduce

let productElems = {

}

const toggleCart = () => { // Open/close cart
  cart.classList.toggle('active')
}

cartIcon.addEventListener('click', (e) => { // Cart icon click
  toggleCart()
  e.stopPropagation()
})

document.addEventListener('click', (e) => { // All document click for close cart
  let target = e.target
  let its_cart = target == cart || cart.contains(target)
  let its_cartIcon = target == cartIcon
  let cart_is_active = cart.classList.contains('active')
  
  if (!its_cart && !its_cartIcon && cart_is_active) {
    toggleCart()
  }
})

button.forEach((btn, index) => { // Product buttons click
  btn.addEventListener('click', () => {
    cartItems.push(productTitle[index].textContent)
    cartCount.textContent = cartItems.length
    totalSum.textContent = parseInt(price[index].textContent) + parseInt(totalSum.textContent)

    cartItemReduce = cartItems.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1
      return acc
    }, {})

    cartList.insertAdjacentHTML('beforeend', 
    `
    <div class="cart__list-item">
      <span class="cart__item-ico" style="background: url(.${productImg[index].attributes.item(1).textContent}) no-repeat; background-size: cover;"></span>
      <span class="cart__item-title">${productTitle[index].textContent}</span>
      <span class="cart__item-price">${price[index].textContent}</span>
      <span class="list-item__remove-item"></span>
    </div>
    `)

    console.log(price[index].textContent, cartItems.length)
  })
})