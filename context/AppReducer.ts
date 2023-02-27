import { State, Actions } from "../interfaces";

const Reducer = (state: State, action: Actions): State => {
	switch (action.type) {
		case "":
			return {
				...state,
			};
	}
};

export default Reducer;