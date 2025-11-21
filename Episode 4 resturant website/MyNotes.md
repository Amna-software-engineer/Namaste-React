To preview Ctrl + Shift + V

# Episode 4 Notes
- food odering app
- planning is 1st step(what u are going to build, procces of bulding how it looks)
- Props stand for properties and since components are js function at the end so props are arguments to a functions. Short form for properties. To dynamically send data to a component we use props. Passing a prop to a function is like
passing an argument to a function.

- Config driven UI control your ui how it look like using data using config
# Why we add key in map?
- Bcz since they are in same level of tree, suppose we have 4 components and if they have not unique key and we want to add component in start or middle or any other position of tree then react don't know which is 1st component that's why it will rerender all components, which can slow our app. Now if we add unique key then react can understand it and render only that element. 
- Dont use index an unique key

# Assignment 
 ### Is JSX mandatory for React?
 No,we can use React.CreateElement
 ### Is ES6 mandatory for React?
 No, using ES6 is not mandatory for React, but it is highly recommended
 ### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX 
 {TitleComponent} is react Element, {<TitleComponent/>},  {<TitleComponent></TitleComponent>} are same used for component th only difference is second syntax is used for passing children etc
 ### How can I write comments in JSX?
 {/**/} we can't use html comment <!-- --> but we use js multiline comment inside {}
 ### What is <React.Fragment></React.Fragment> and <></> ?
 Both are same <></> is converted to React.Fragment at the end but only difference is we can pas key in <></>. 
 ### Why we use React Fragment
 we use react fragment to improve performance(no need to add extra parent div, since react return only one element,in case of multiple elements we need to add extra div(reduce performance)), cleaner dom structure.
 ### What is the Virtual DOM?
It is an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
### reconciliation
 The process of computing change/difference using diffing algorithm and updating DOM after diff is computed is called reconciliation
 ### Why we need keys in React? When do we need keys in React?
Key allow react to uniquely identify childs(of the same level). we need keys if we have severla childs in same level(map on array)
### Can we use index as keys in React?
Yes we can use but it is not recomended by react
### What is props in React? Ways to
props allow to pass data to react components thay are like passing arguments to a function
### What is a Config Driven UI ?
 A "Config-Driven UI" is a design pattern where the user interface is generated dynamically based on an external configuration file(config.js,  ) or data structure, rather than being hard-coded directly into the application's source code. uses JSON to define layout,components etc. Either created in frontend manualy or sended from backend 