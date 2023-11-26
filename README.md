# eShop Nology Project

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
    
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

totally new collection in firestorm with placeholder so it doesnt delete, filter it out
firestore function to get all the products with filter
function that adds products to cart
check if the product is already in cart
find it by name and variant
check if its in cart, if it is increase by quantity
if it isnt in card add new entry to the cart
decrement the available quantity from product
check if its in cart function that checks if true or false
increment cart quantity
call the check if in cart
call last function with is decrement quantity
can delete stuff too

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart
  - Display the total cost of your cart
  - Purchase should remove items from stock and clear the cart (no need to track any kind of payment)

- TIPS :

1. Make sure your site is scoped to one category of products
2. **PLAN IN ADVANCE**
   - Think about what the data should look like
   - Think about the components you will need
   - Think about context
   - Think about edge cases
3. Plan for the future (how will you show this off if your firestore is no longer active)
   - Add detailed instructions on how to set up/add products in the readme

## Demo & Snippets

![shop](https://github.com/hannah-dunn/nology-e-shop/assets/114053793/c828b1c5-092a-43ea-8caf-3df1941b57df)

![Screenshot (2943)](https://github.com/hannah-dunn/nology-e-shop/assets/114053793/47ccd034-d490-44cf-ab81-01027b2c234a)

![Screenshot (2944)](https://github.com/hannah-dunn/nology-e-shop/assets/114053793/9d765359-0e2a-41c7-a012-63141a8a0fa9)

---

## Build Steps

-   how to build / run project
-   use proper code snippets if there are any commands to run

---

## Design Goals / Approach

-   I followed a similar look I used in my first project with my portfolio, with the plain but bold title and black-on-white font
-   I wanted bright photography to stand out on the plain page and used red for the 'sale' pitch alongside the carousel
-   Again very minimalist, I wanted to focus on the features working and the layout of the website at least initially, rather than overcomplicate it

---

## Features

-   Landing page with title, rotating carousel, and item catalog
-   Each item/product links to their individual product page, with further details about the item
-   Items are able to be added to a cart that calculates the total cost
-   Routing to the cart, homepage, page not found and item pages

---

## Known issues

-   I haven't fixed the quantity not adjusting properly when items are added

---

## Future Goals

-   Have the quantity be responsive to change when items are added to the cart
-   Have the different colours of the products be displayed on the home page and their individual product pages
-   Spruce up the design, with possible fake advertisements and more colour
