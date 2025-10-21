To preview Ctrl + Shift + V


# Episode 3 Notes

## Parcel & NPM Commands

- `npx parcel index.html`  
  npx means we are executing an npm package `parcel` and giving it the source file `index.html`.

- `npm run start` or `npm start`  
  Behind the scenes it runs the command written in the `scripts` section with the key `"start"` (for example, `"start": "parcel index.html"`).

---

## React Elements vs DOM Elements

- Just like we have DOM elements, we also have React elements which are kind of equivalent to DOM elements.  
- React elements are JavaScript objects that describe what should appear on the screen.  
- DOM elements are actual HTML elements rendered in the browser.  
- Example:  
  ```js
  React.createElement("h1", {}, "hello");
  ```

---

## JSX and Transpilation

- JSX is not part of React but is a language extension; we can write React code without JSX (not mandatory).  
- JSX is not HTML inside JavaScript; it is an HTML-like syntax.  
- Browsers do not understand JSX. Parcel (via Babel) converts JSX to `React.createElement` calls.  
- Transpilation flow:  
  JSX => `React.createElement` => ReactElement (JS object) => HTMLElement (render)

- The JS engine understands ECMAScript (ES) standards such as ES6.

---

## How createElement Works

- `React.createElement` creates a React element, which is an object containing details of which HTML element to create.  
- ReactDOM converts this React element (object) to an HTMLElement and replaces the root element where React is attached.

---

## JSX Syntax Details

- In JSX, attributes are written in camelCase (e.g., `className`).  
- To write JSX across multiple lines, wrap it in parentheses `()`.

---

## React Components

- Two types:  
  - Class-based components: old way — uses classes.  
  - Functional components: new way — uses functions, must be named with a capital letter, and return JSX.  
- A functional component is a function that returns some JSX code / a React element.  
- Component composition: composing one component inside another.

---

## JSX and Security

- `{}` is used to write JS expressions inside JSX.  
- Cross-site scripting (XSS): JS inside `{}` will be executed. If data from an API contains malicious code, an attacker could exploit it. JSX/React provides protections and does not run HTML/JS blindly.

---

JSX makes code more readable.

