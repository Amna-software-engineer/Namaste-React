import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
  "h1",
  { id: "heading" }, //atributes
  "Hello World from react" //children
)
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))

const ourStructure = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "Child1" },
    [React.createElement("h1", {}, "i am h1 tags"), React.createElement("h2", {}, "i am h2 tag")]
  ), React.createElement("div", { id: "Child2" },
    [React.createElement("h1", {}, "i am h1 tags"), React.createElement("h2", {}, "i am h2 tag")]
  )]
)
root.render(ourStructure)

