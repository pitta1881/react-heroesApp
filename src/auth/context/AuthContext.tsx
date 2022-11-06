import { createContext } from "react";
import { IAuthState } from "./authReducer";

interface initialState {
  authState: IAuthState;
  login: (name: string) => void;
  logout: () => void;
}

const rest: initialState = {
  authState: {
    logged: false,
  },
  login: (name: string) => {},
  logout: () => {},
};
export const AuthContext = createContext(rest);
