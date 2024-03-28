import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 1,
    },
    reducers: {
        plus: (state, action) => {
            state.value += action.payload;
        },
        minus: (state, action) => {
            if (state.value > 1) {
                state.value -= action.payload;
            } else {
                console.log("Value is 1");
            }
        },
        multiply: (state, action) => {
            state.value *= action.payload;
        },
        divide: (state, action) => {
            state.value = action.payload / 2;
        },
        double: (state, action) => {
            state.value += action.payload;
        }
    },
});

export const { plus, minus, multiply, divide, double } = countSlice.actions;

export default countSlice.reducer;
