To preview Ctrl + Shift + V
## Why do we use `super(props)` in a constructor?

* `super(props)` calls the parent class constructor.
* It makes sure the parent sets up everything it needs before the child class runs its own constructor.
* It also passes props to the parent so the parent can use them.

## State in Class Components

* In class components, state is one big object that holds all your state variables.
* In functional components, React keeps all state values in one internal object behind the scenes.
* Never update the state directly.

  ```js
  this.state.count = this.state.count + 1 // ❌ Don’t do this
  ```
* Always use `setState()` because it updates only the properties you pass and leaves the rest unchanged.
  Example: if you have `count1, count2, count3, count4`, and in `setState()` you change only `count1` and `count2`, then `count3` and `count4` stay the same.

## Basic Lifecycle (Class Components)

1. constructor
2. render
3. componentDidMount (after the component appears in the DOM)
4. componentDidUpdate(called when something chnage in state/props(setState,props))
5. componentWillUnmount(called when component removed from UI)

## Parent–Child Lifecycle Order

If you have a Parent component (About) and two child components (User1, User2), the order is:

```
Parent constructor
Parent render
    Child1 constructor
    Child1 render
    Child2 constructor
    Child2 render
<DOM Updated — in a single batch>
    Child1 componentDidMount
    Child2 componentDidMount
Parent componentDidMount
```

### Why this order?

You might think Child1's `componentDidMount` should run right after Child1’s render, but React doesn't do that.
React batches all renders together because updating the DOM is expensive. So it first finishes rendering all children, then in the commit phase it updates the DOM once, and then runs all `componentDidMount` methods for children and parent.

## componentDidMount

* Runs right after the component is added to the DOM.
* Best place to make API calls.
* Flow: first render the UI quickly → then make the API call → then re-render with data.

## React’s Two Phases

* Render Phase (constructor + render)
* Commit Phase (React updates the DOM + componentDidMount)

## componentWillUnmount

* Runs when the component is removed from the UI.
* Used for cleanup tasks like clearing intervals to avoid memory leaks.

## Mounting vs Unmounting

* **Mounting:** When the component appears on the UI.
* **Unmounting:** When the component is removed from the UI (like when switching pages).
