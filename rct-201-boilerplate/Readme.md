## RCT-201

### Part 1 - Redux, Router and memoisation

- create a product checkout page with redux, react-router
- User directly sees a list of products. use the dummy db.json attached with source
- Navbar has 3 items:
  - Title of the site, which is a link, which takes you to /
  - Total items in cart: eg: Cart: 10
  - a button to checkout, which takes you to `/checkout` route
- Every cart on homepage shows following information:
  - A product image
  - Product title
  - Category
  - Price
  - Rating
  - A add to cart button
- When user clicks on `Add to cart` button, the cart count in navbar increases
- for simpliciy's sake user can only add 1 item of a kind in cart
- thus if he clicks on `add to cart` button, he will see "Item Already in cart" text instead of button
- if user clicks on another item, same thing will happen: cart count increases, button on that cart goes away
- this information is stored in redux.
- When user clicks on `checkout` button he will see following information:
  - Total Items in cart (take this from redux)
  - you can also make network request to fetch the additional data from backend
  - Below all items list show `total` cost of items (sum)
- If user goes back and adds one more item this total should increase
- The details page is easiest. just show all the details as mentioned in the `CartDetails` component

##### Notes on implementation:
- Entire project should be in typescript. no js files.
- Some hints on hooks:
  - Use useSelector like this:
  ```js
  type StoreType = {
      count: number;
  }
  const count = useSelector<StoreType, number>(store => store.count)
  ```
  - Where StoreType is the Type of Store, it represent what type of things stored in store
  - and `number` is the type that you are returning from useSelector, this `count` becomes a number
- If you can't figure out how to fix some typescript error, remember react app will still work it will not just get deployed
- So in such cases you can use `any` type eg: `const x = useSelector<any, any>` or `const y: any = something()` etc



### Part 2 - hooks

- implement the following hooks:
  - useCounter
  - useList
- useCounter hook accepts a number and returns the following things:
```js
const { value, inc, dec, set } = useCounter(10);
```
- Where value is the current value of counter and rest are functions
  - inc increments counter, inc(1), inc(2) etc. if not given, default is 1: inc()
  - dec decrements Counter, dec(1), dec(2) etc. if not given, default is 1: dec()
  - set sets the value to given value: set(100) will make counter 100
- useList is a hook that helps manipulate lists
- it returns following things:
```js
const [list, { push, pop, clear, reset, map }] = useList([1,2,3,4])
```
- Where list is the current list. and rest are functions
  - push adds element to list: push(10)
  - pop removes last element from list
  - clear empty's list
  - reset resets the list to initial value: 1,2,3,4
  - map accepts a function and applies it on all values on list: `map(x => x*2)` will double every item in list
  - use typescript for creating hooks. in case you can't figure out correct types use `any` for now