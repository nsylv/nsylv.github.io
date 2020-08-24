import { Actions, SET_DESCRIPTION } from "../actions/types";
import { words } from "../words";

interface DescriptionState {
  description: string | null;
}

const INITIAL_STATE: DescriptionState = {
  description: words[0].description,
};

export function descriptionReducer(
  state = INITIAL_STATE,
  action: Actions
): DescriptionState {
  switch (action.type) {
    case SET_DESCRIPTION:
      return { ...state, description: action.payload };
    default:
      return state;
  }
}
