import { createContext, useReducer } from "react";

import { AppProviderProps, ContextProps } from "../interfaces";
import AppReducer from "./AppReducer";

const initialState: ContextProps = {};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};