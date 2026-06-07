const cartbtn = document.getElementById('cart-btn')
const cartmodal = document.getElementById('cart-modal')
const closebtn = document.getElementById('close')
const productcontainer = document.getElementById('products-container')
const cartitemlist = document.getElementById('cart-item-list')
const total = document.getElementById('total')
const search = document.getElementById('search-input')
const cartcount = document.querySelector('.cart-count')
const filter = document.getElementById('filter')

let allproducts = null
let cart = []


cartbtn.addEventListener('click', () => {

    cartmodal.classList.add('show')
    displaycartitems()
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

        btn.addEventListener('click', () => {
            addtocart(item)
        })

        newdiv.appendChild(img)
        newdiv.appendChild(title)
        newdiv.appendChild(price)
        newdiv.appendChild(btn)

        productcontainer.appendChild(newdiv)

    });

}

const addtocart = (product) => {

    const exsistingitem = cart.find(item => item.id === product.id)

    if (exsistingitem) {
        exsistingitem.quantity += 1
    }

    else {
        const newcartitem = {

            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        }
        cart.push(newcartitem)
    }

    updatecount()
    displaycartitems()
    calculatetotal()
}

const updatecount = () => {

    const total = cart.reduce((acc, item) => {

        return acc + item.quantity
    }, 0)

    cartcount.textContent = total
}

const displaycartitems = () => {

    cartitemlist.innerHTML = ''

    cart.forEach(item => {

        const li = document.createElement('li')
        const titlespan = document.createElement('span')
        const pricespan = document.createElement('span')
        const quantityspan = document.createElement('span')
        const incbtn = document.createElement('button')
        const decbtn = document.createElement('button')
        const removebtn = document.createElement('button')

        titlespan.textContent = item.title
        pricespan.textContent = item.price
        quantityspan.textContent = item.quantity
        incbtn.textContent = '+'
        decbtn.textContent = '-'
        removebtn.textContent = 'REMOVE'

        li.appendChild(titlespan)
        li.appendChild(pricespan)
        li.appendChild(quantityspan)
        li.appendChild(incbtn)
        li.appendChild(decbtn)
        li.appendChild(removebtn)
        cartitemlist.appendChild(li)

        incbtn.addEventListener('click', () => {
            item.quantity += 1
            displaycartitems()
            updatecount()
        })

        decbtn.addEventListener('click', () => {

            if (item.quantity > 1) {
                item.quantity -= 1
            }

            else {
                const index = cart.findIndex(cartitem => cartitem.id === item.id)
                cart.splice(index, 1)
            }
            displaycartitems()
            updatecount()

        })

        removebtn.addEventListener('click', () => {

            const index = cart.findIndex(cartitem => cartitem.id === item.id)
            cart.splice(index, 1)
            displaycartitems()
            updatecount()

        })
    })
    calculatetotal()
}

const calculatetotal = () => {

    const totalprice = cart.reduce((acc, item) => {

        const pricetotal = item.quantity * item.price
        return acc + pricetotal

    }, 0)

    total.textContent = `the total price of the cart is: $${totalprice.toFixed(2)}`

}

const searchproduct = (searchterm) => {

    const searched = allproducts.filter(item => item.title.toLowerCase().includes(searchterm.toLowerCase()))

    productcontainer.innerHTML = ''

    searched.forEach(item => {

        const newdiv = document.createElement('div')
        newdiv.classList.add('product-card')

        const img = document.createElement('img')
        const title = document.createElement('h3')
        const price = document.createElement('p')
        const btn = document.createElement('button')

        img.src = item.image
        title.textContent = item.title
        price.textContent = item.price
        btn.textContent = 'add-to-cart'
        btn.classList.add('add-to-cart')

        btn.addEventListener('click', () => {
            addtocart(item)
        })

        newdiv.appendChild(img)
        newdiv.appendChild(title)
        newdiv.appendChild(price)
        newdiv.appendChild(btn)

        productcontainer.appendChild(newdiv)

    })
}

search.addEventListener('input', () => {
    const searchterm = search.value

    if (searchterm === '') {
        productcontainer.innerHTML = ''
        displayproducts()
    }
    else {
        searchproduct(searchterm)
    }
})

const filterbycategory = (category) => {

    if (category === 'all') {


        productcontainer.innerHTML = ''
        displayproducts()
    }

    else {

        const cat = allproducts.filter(item => item.category === category)

        productcontainer.innerHTML = ''

        cat.forEach(item => {

            const newdiv = document.createElement('div')
            newdiv.classList.add('product-card')

            const img = document.createElement('img')
            const title = document.createElement('h3')
            const price = document.createElement('p')
            const btn = document.createElement('button')

            img.src = item.image
            title.textContent = item.title
            price.textContent = item.price
            btn.textContent = 'add to cart'
            btn.classList.add('add-to-cart')

            btn.addEventListener('click', () => {
                addtocart(item)
            })

            newdiv.appendChild(img)
            newdiv.appendChild(title)
            newdiv.appendChild(price)
            newdiv.appendChild(btn)

            productcontainer.appendChild(newdiv)

        })
    }
}

filter.addEventListener('click', (e) => {

    if (e.target.classList.contains('filter-btn')) {

        const category = e.target.getAttribute('data-category')

        document.querySelectorAll('.filter-btn').forEach(btn => {

            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        filterbycategory(category)
    }
})
fetchproducts()