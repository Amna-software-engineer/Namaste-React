To preview Ctrl + Shift + V

## Why we use State variables instead of normal JS variables in React?

Normal JS variables don't tell React that something changed. So even if the value updates in memory, the UI doesn't move. React simply has no idea.

State variables (useState) act like a signal. When they change, React says, "oh something updated," and it re-renders the component.

React re-renders the entire component (basically calls the function again), but updates only the parts that actually changed. It does this by comparing the old and new UI using its diffing algorithm.

### Example

```js
const [loginBtn, setLoginBtn] = useState("login");

<button onClick={() => setLoginBtn("logout")}>{loginBtn}</button>
```

### How it works

When you click the button, `loginBtn` becomes "logout". React then re-renders the component. On this new run of the function, a fresh `loginBtn` is created with the updated value. So we never "change" the const directly. React just creates a new version during every render.

This is why the UI updates.

### Rendering

Rendering simply means React is calling your component function again.

## useState Hook

* Don't use it outside a component function.
* Don't use it inside conditions or loops.
* Keep it at the top level of your component.

## useEffect Hook

* No dependency array → runs on every render.
* Empty dependency array → runs only once (when the component first appears).
* Dependency array with values → runs whenever those values change.
