import { RootState } from "../reducers";

export const selectDescription = (state: RootState) =>
  state.description.description;
