# Setps to create Context 
1. create context using `CreateContext` e.g `UserContext.js`.
2. then provide it where u want e.g in `App.js` using `<UserContext.Provider>  Childrens <UserContext.Provider/>` and pass it value.
3. To update the value create the state in Parent Component shere you are providing the context , pass the `state` and `setState` to chnage the state from any Component, then in child component use setstate to change the value of context