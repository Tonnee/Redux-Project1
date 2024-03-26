import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 0,
    },
    reducers: {
        plus: (state) => {
            state.value += 1;
        },
        minus: (state) => {
            if (state.value > 1) {
                state.value -= 1;
            } else {
                console.log("Value is 1");
            }
        },
        multiply: (state) => {
            state.value *= state.value;
        },
        divide: (state) => {
            state.value = state.value / 2;
        },
    },
});

export const { plus, minus, multiply, divide } = countSlice.actions;

export default countSlice.reducer;
