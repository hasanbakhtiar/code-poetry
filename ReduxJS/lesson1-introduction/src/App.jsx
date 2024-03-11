import React from 'react'
import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (typeof(action.payload)==="number"?action.payload:1) };

    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);


store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch({
  type: "INCREMENT",
  payload:"5"
})
store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "DECREMENT"
})







const App = () => {
  return (
    <div>App</div>
  )
}

export default App