const cartbtn = document.getElementById('cart-btn')
const cartmodal = document.getElementById('cart-modal')
const closebtn = document.getElementById('close')
let allproducts = null

cartbtn.addEventListener('click', () => {

    cartmodal.classList.add('show')
})

closebtn.addEventListener('click', () => {

    cartmodal.classList.remove('show')
})

const fetchproducts = async () => {

    try {

        const url = 'https://fakestoreapi.com/products'

        const response = await fetch(url)
        const data = await response.json()
        allproducts = data


    } catch (error) {
        console.log(error)

    }
}

fetchproducts()