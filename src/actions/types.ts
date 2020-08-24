export const SET_DESCRIPTION = "SET_DESCRIPTION";

interface SetDescriptionAction {
  type: typeof SET_DESCRIPTION;
  payload: string;
}

export type Actions = SetDescriptionAction;
