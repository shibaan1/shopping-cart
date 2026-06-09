const cartbtn = document.getElementById('cart-btn')
const cartmodal = document.getElementById('cart-modal')
const closebtn = document.getElementById('close')
const productcontainer = document.getElementById('products-container')
const cartitemlist = document.getElementById('cart-item-list')
const total = document.getElementById('total')
const search = document.getElementById('search-input')
const cartcount = document.querySelector('.cart-count')
const filter = document.getElementById('filter')
const discountinp = document.querySelector('input[placeholder = "discount code"]')

let allproducts = null
let cart = []
const discount = {
    'SAVE10': 10,
    'SAVE20': 20,
    'SAVE50': 50
}

const loadcart = () => {

    const storage = localStorage.getItem('cart')

    if (storage) {
        cart = JSON.parse(storage)
        updatecount()
        displaycartitems()
    }
}

const savecart = () => {

    const item = JSON.stringify(cart)
    localStorage.setItem('cart', item)
}

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
    })
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
    savecart()
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
        const cartitemleft = document.createElement('div')
        const cartitemright = document.createElement('div')
        const titlespan = document.createElement('span')
        const pricespan = document.createElement('span')
        const quantityspan = document.createElement('span')
        const incbtn = document.createElement('button')
        const decbtn = document.createElement('button')
        const removebtn = document.createElement('button')

        cartitemleft.className = 'cart-item-left'
        cartitemright.className = 'cart-item-right'
        removebtn.classList.add('rmvbtn')

        titlespan.textContent = item.title
        pricespan.textContent = `price : $${item.price}`
        quantityspan.textContent = `Qty: ${item.quantity}`
        incbtn.textContent = '+'
        decbtn.textContent = '-'
        removebtn.textContent = 'REMOVE'

        cartitemleft.appendChild(titlespan)
        cartitemleft.appendChild(pricespan)
        cartitemleft.appendChild(quantityspan)

        cartitemright.appendChild(incbtn)
        cartitemright.appendChild(decbtn)
        cartitemright.appendChild(removebtn)

        li.appendChild(cartitemleft)
        li.appendChild(cartitemright)

        cartitemlist.appendChild(li)

        incbtn.addEventListener('click', () => {
            item.quantity += 1
            displaycartitems()
            updatecount()
            savecart()
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
            savecart()

        })

        removebtn.addEventListener('click', () => {

            const index = cart.findIndex(cartitem => cartitem.id === item.id)
            cart.splice(index, 1)
            displaycartitems()
            updatecount()
            savecart()
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
        price.textContent = `$${item.price}`
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

        })
    }
}

const applydiscount = (code) => {

    if (discount.hasOwnProperty(code)) {
        const discpercent = discount[code]

        const totalprice = cart.reduce((acc, item) => {
            const totalprice = item.quantity * item.price
            return acc + totalprice
        }, 0)

        const discountamount = totalprice * (discpercent / 100)
        const finalprice = totalprice - discountamount
        total.textContent = `the total price of the cart is: $${totalprice.toFixed(2)} 
        Final: $${finalprice.toFixed(2)}
         (${code}: ${discount[code]}% off)`
        alert(`discount code applied! you saved $${discountamount.toFixed(2)}`)

    }
    else {
        alert(`INVALID CODE`)
    }
}

cartbtn.addEventListener('click', () => {

    cartmodal.classList.add('show')
    displaycartitems()
})

closebtn.addEventListener('click', () => {

    cartmodal.classList.remove('show')
})

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

discountinp.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {

        const code = discountinp.value.toUpperCase()
        applydiscount(code)
        discountinp.value = ''
    }
})

loadcart()
fetchproducts()