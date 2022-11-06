import { authReducerTypes } from "../types/types";

export interface IAction {
  type: string;
  payload?: IAuthState;
}

export interface IAuthState {
  id?: number;
  logged: boolean;
  name?: string;
}

export const authReducer = (state: IAuthState, action: IAction) => {
  switch (action.type) {
    case authReducerTypes.login:
      return {
        ...state,
        logged: true,
        name: action.payload?.name,
      };
    case authReducerTypes.logout:
      return {
        ...state,
        logged: false,
        name: "",
      };
    default:
      return state;
  }
};
