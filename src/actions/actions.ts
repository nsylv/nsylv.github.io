import { Actions, SET_DESCRIPTION } from "./types";

export function setDescription(description: string): Actions {
  return {
    type: SET_DESCRIPTION,
    payload: description,
  };
}
