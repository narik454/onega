const cart = document.getElementById('checkout')
const button = document.querySelectorAll('.group-products__btn')
const price = document.querySelectorAll('#price')

cart.onclick = () => {

}

button.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log(price[index].textContent)
  })
})