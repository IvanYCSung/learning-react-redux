// import { createStore } from "redux"
import { createSlice, createStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

/*
const counterReducer = (state = initialCounterState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
*/

// when we return the state in redux reducer function, we must return all the states, not like useReducer() that we can return certian states and it will merge for us.

// in "redux" -
// we must NOT mutate states directly like below it will cause bugs...
// if (action.type === "increment") {
//   state.counter ++
//   return state
// }
// we should alway return all the states in an object...
// if (action.type === "increment") {
//   return {
//     counter: state.counter + 1,
//     showCounter: state.showCounter,
//   };
// }
// in "redux toolkit" -
// we CAN mutate states directly...
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      // the value passed into action of this function will saved in "payload"
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
// apart from export store, we also need to export actions
// counterSlice.actions contains all the reducers in counterSlice and these reducers are in action objects form

export default counterSlice.reducer;
