import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalItems: localStorage.getItem("totalItems")
		? localStorage.getItem("totalItems")
		: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setTotalItems(state, action) {
			state.totalItems = action.payload;
		},
	},
});

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;
