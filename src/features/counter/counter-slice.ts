import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    incrementWithValue(state: CounterState, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementWithValue } =
  counterSlice.actions;

export default counterSlice.reducer;
