import React from "react";
import ReactDOM from "react-dom/client"

// React.createElemen=> ReactElement-JS object =>HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Welcome to React js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //root.render/ReactDOM convert reactElementto html element 
// console.log(heading);

// using JSX
// JSX =>React.createElemen=> ReactElement-JS object =>HTMLElement(render)
const jsxHeading = <h1 className="header">
  Welcome to React using JSX.
  it is muliline
</h1>
// console.log(jsxHeading);
root.render(jsxHeading)

const FunctionalComponent = () =>
 <ul id="heading">
  <li>li 1</li>
  <li>li 2</li>
  <li>li 3</li>
  <li>li 4</li>
</ul>
const container=(
  <div className="container">
    <h1>Functional Component inside JSX</h1>
    {/* these 3 are same */}
    <FunctionalComponent/>
    <FunctionalComponent></FunctionalComponent>
    {FunctionalComponent()} 
  </div>
)
// root.render(FunctionalComponent )// errr
// root.render(container)

// ************ coding assignment *************************
// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)
// const header=React.createElement("div",{class: "title"},
//   [React.createElement("h1",{},"h1 tag"),
//   React.createElement("h2",{},"h2 tag"),
//   React.createElement("h3", {},"h3 tag" )] ) 
// ○ Create the same element using JSX
const header=(<div className="title">
  <h1>h1 tag using jsx</h1>
  <h1>h2 tag using jsx</h1>
  <h1>h3 tag using jsx</h1>
</div>)
// ○ Create a functional component of the same with JSX
// ○ Pass attributes into the tag in JSX
const HeaderFunctionalComponent=()=>(
  <div className="title">
  <h1 id="heading">h1 tag using jsx functional component</h1>
  <h1>h2 tag using jsx functional component</h1>
  <h1>h3 tag using jsx functional component</h1>
</div>
)
// ○ Composition of Component(Add a component inside another)
// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX
const HeaderFunctionalComponent2=()=>(
  <div className="title">
  <h1 id="heading">
    Functional composition
  </h1>
  <h1>h2 tag using jsx functional component</h1>
  <h1>h3 tag using jsx functional component</h1>
  {header}

</div>
)

// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const Header=()=>(
  <div className="header">
    <span className="logo">logo</span>
    <span>

    <input type="search" placeholder="search something"/>
    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
    </span>
    <span>
Amna
    <i className="fa-solid fa-circle-user"></i>
    </span>
  </div>
)


root.render(<Header/>)