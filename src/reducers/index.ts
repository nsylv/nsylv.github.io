import { combineReducers } from "redux";
import { descriptionReducer } from "./description";

export const rootReducer = combineReducers({
  description: descriptionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
