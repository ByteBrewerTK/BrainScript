import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const profileSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.totlalItems = action.payload;
		},
	},
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
