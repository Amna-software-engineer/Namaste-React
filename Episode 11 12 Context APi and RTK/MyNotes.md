# Setps to create Context 
1. create context using `CreateContext` e.g `UserContext.js`.
2. then provide it where u want e.g in `App.js` using `<UserContext.Provider>  Childrens <UserContext.Provider/>` and pass it value.
3. To update the value create the state in Parent Component shere where you are providing the context , pass the `state` and `setState` to chnage the state from any Component, then in child component use setstate to change the value of context.


# steps for setting RTK 
1. install react-redux(it is like brige between th react and redux) & @reduxjs/toolkit
2. create store using configStore({reducer:{// r}})
3. connect store to App using Provider
4. create Slice it takes the arguments name of slice, initialState and reducers object which has action and function corrosponding to those action e.g `reducers:{addItem:(state,action)=>{// your code }}`. Here addItem is action and and callback function is the function corrosponding to those action.
5. dispatch(addItem(item)) dispatch your action
6. subsribe to store using `useSelector((store)=>stor.cart.cartItems)`. when we use UseSelctor then we subscribed to the store meaning our component is synced with store(cartItems) when something chnage in cartItems then component re-render and update UI.
7. be sepcific while subscribing to store use  `useSelector((store)=>stor.cart.cartItems) ` like this not like, `useSelector((store)=>stor)`this bcz it slow the perfomance bcz whenever somethign change in store the compoennt subsribed to the store will rerender