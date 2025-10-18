const heading = React.createElement(
    "h1",
    { id: "heading" }, //atributes
    "Hello World from react" //children
) 
console.log(heading);//heading is react element(js object) not html element, props: children + arrtributes

const root = ReactDOM.createRoot(document.getElementById("root"))//everything will render inside root
// root.render(heading); //job of "render" is to take "root" element(js object) and convert it into html element(which browser understand) and put inside root element in html file


// const ourStructure=React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div",{id:"Child"},
//         React.createElement("h1",{},"i am heading")
//     )
// )
// ************ if child has 2 tags i.e h1,h2 or more cmplex structure  *********

const ourStructure=React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id:"Child1"},
       [ React.createElement("h1",{},"i am h1 tags"),React.createElement("h2",{},"i am h2 tag")]
    ),React.createElement("div",{id:"Child2"},
       [ React.createElement("h1",{},"i am h1 tags"),React.createElement("h2",{},"i am h2 tag")]
    )]
)
root.render(ourStructure)
/*
root.render wil replace whatever inside root in "index.html" is with ourStructure, e.g we have
<div id="root">
  <h1>i am amna</h1><!--this will be replaced by react.render and only ourStructure will be shown-->
</div>
*/
