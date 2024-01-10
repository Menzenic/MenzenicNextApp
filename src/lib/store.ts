import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/user/userslice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			AuthReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
