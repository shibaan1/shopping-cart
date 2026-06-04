const cartbtn = document.getElementById('cart-btn')
const cartmodal = document.getElementById('cart-modal')
const closebtn = document.getElementById('close')

cartbtn.addEventListener('click', () => {

    cartmodal.classList.add('show')
})

closebtn.addEventListener('click', () => {

    cartmodal.classList.remove('show')
})