export interface WrapperProps {
	children: JSX.Element | JSX.Element[];
}

export interface MetaProps {
	title?: string;
	description?: string;
	keywords?: string;
	url?: string;
	image?: string;
}

export interface ContextProps {}

export interface AppProviderProps {
	children: JSX.Element[] | JSX.Element;
}

export type State = {};

export type Actions = {
	type: "";
};