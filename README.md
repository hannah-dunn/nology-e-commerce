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

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)
