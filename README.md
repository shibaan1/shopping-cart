# 🛒 Shopping Cart

A fully functional e-commerce shopping cart built with vanilla JavaScript — fetching live product data from Fake Store API.

Light Theme JavaScript API localStorage
🚀 Features
✅ Product listing — 20 products from Fake Store API
✅ Add to cart — with real-time counter badge
✅ Cart management — increase/decrease quantity, remove items
✅ Search products — real-time filtering by name
✅ Category filtering — 6 categories (clothing, electronics, jewelry, etc.)
✅ Discount codes — SAVE10, SAVE20, SAVE50
✅ Total calculation — automatic with discount support
✅ localStorage persistence — cart survives page refresh
✅ Modal interface — clean, organized cart display
✅ Responsive design — mobile (1 col) → tablet (2 col) → desktop (3 col)

🛠️ Built With
HTML5 — semantic structure
CSS3 — Grid, Flexbox, CSS Variables, Media Queries
Vanilla JavaScript — async/await, event delegation, array methods
Fake Store API — real product data
localStorage API — persistent cart storage

💡 Key Concepts Used
Async/Await — fetch products asynchronously
API Integration — GET requests from Fake Store API
Event Delegation — single listener for multiple elements
Array Methods — filter, map, reduce, forEach for data processing
State Management — cart array updates across interactions
localStorage — save/restore cart data
CSS Grid — 3-column product layout
Flexbox — modal and cart item layouts
DOM Manipulation — dynamic element creation and updates

📁 Project Structure
shopping-cart/
├── index.html       # Semantic HTML structure
├── style.css        # Styling & responsive design
├── script.js        # Logic & API integration
├── README.md        # This file
└── .gitignore       # Git ignore

🏃 How to Run
Clone the repo:
git clone https://github.com/shibaan1/shopping-cart.git
cd shopping-cart

Open index.html in browser — that's it!
No API keys needed. No build tools. No dependencies. Just vanilla JavaScript.

🎨 Design Highlights
Light theme — clean, professional
Header — search bar, cart button with counter
Product grid — responsive (3 → 2 → 1 columns)
Filter buttons — category selection with hover effect
Modal cart — overlay with close button
Cart items — flexbox layout with organized controls
Discount section — input and total display
Red accent color — buttons and highlights

🔧 Key Functions
Function	Purpose
fetchproducts()	Fetch 20 products from API
displayproducts()	Create and display product cards
addtocart(product)	Add item to cart array
searchproduct(searchterm)	Filter products by name
filterbycategory(category)	Filter products by category
displaycartitems()	Render cart items in modal
calculatetotal()	Sum cart price with discounts
applydiscount(code)	Apply discount code
savecart()	Save cart to localStorage
loadcart()	Restore cart from localStorage

📊 What You'll Learn
Async/await patterns
API integration
Event delegation
Array methods (filter, map, reduce)
State management
localStorage API
CSS Grid & Flexbox
Responsive design
Git workflow
DOM manipulation

🌟 Discount Codes
SAVE10 — 10% off
SAVE20 — 20% off
SAVE50 — 50% off

Example: Type "SAVE10" in discount input and press Enter

💾 Data Persistence
Cart data automatically saved to localStorage when:
- Item added to cart
- Quantity increased/decreased
- Item removed from cart

Cart automatically loaded on page refresh

🔄 Product Categories
men's clothing
women's clothing
electronics
jewelery

📱 Responsive Breakpoints
Desktop (1024px+) — 3 columns
Tablet (768px-1023px) — 2 columns
Mobile (<768px) — 1 column

🎯 Key Learnings
DOM Manipulation — create, append, remove elements dynamically
API Integration — fetch products asynchronously
Event Handling — click listeners, form submission
Array Methods — efficient data filtering and transformation
State Management — track cart items across interactions
localStorage — persist user data between sessions
Responsive Design — mobile-first approach
CSS Layouts — Grid for products, Flexbox for components
User Experience — loading states, error messages, feedback

🌟 Future Enhancements
[ ] User authentication & accounts
[ ] Wishlist functionality
[ ] Product reviews & ratings
[ ] Multiple payment methods
[ ] Order history
[ ] Product variants (size, color)
[ ] Stock quantity limits
[ ] Recently viewed products

📚 API Details
Endpoint: Fake Store API (https://fakestoreapi.com)
Products: /products (20 total items)
Data: ID, title, price, description, category, image, rating
Rate Limit: Unlimited (public API)

Built by @shibaan1 — third vanilla JavaScript project