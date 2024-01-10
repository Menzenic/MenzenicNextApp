import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INTITIAL_STATE: {
	value: {
		isAuth: boolean;
		username: string;
		uid: string;
		isModerator: boolean;
	};
} = {
	value: {
		isAuth: false,
		username: "",
		uid: "",
		isModerator: false,
	},
};

export const auth = createSlice({
	name: "auth",
	initialState: INTITIAL_STATE,
	reducers: {
		logOut: () => {
			return INTITIAL_STATE;
		},
		logIn: (state, action: PayloadAction<any>) => {
			return {
				value: {
					...state.value,
					username: action.payload,
				},
			};
		},
	},
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
