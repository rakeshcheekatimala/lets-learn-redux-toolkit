import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state: CounterState) {
      state.value++;
    },
    decrement(state: CounterState) {
      state.value--;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
