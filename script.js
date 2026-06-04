const cartbtn = document.getElementById('cart-btn')
const cartmodal = document.getElementById('cart-modal')
const closebtn = document.getElementById('close')
const productcontainer = document.getElementById('products-container')
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
        displayproducts()

    } catch (error) {
        console.log(error)
    }
}

const displayproducts = () => {
    allproducts.forEach((item) => {

        const newdiv = document.createElement('div')
        newdiv.classList.add('product-card')

        const img = document.createElement('img')
        const title = document.createElement('h3')
        const price = document.createElement('p')
        const btn = document.createElement('button')

        img.src = item.image
        title.textContent = item.title
        price.textContent = `$${item.price}`
        btn.textContent = 'add to cart'
        btn.classList.add('add-to-cart')

        newdiv.appendChild(img)
        newdiv.appendChild(title)
        newdiv.appendChild(price)
        newdiv.appendChild(btn)

        productcontainer.appendChild(newdiv)

    });

}

fetchproducts()