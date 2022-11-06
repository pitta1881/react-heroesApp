import { ReactNode, useReducer } from "react";
import { authReducerTypes } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer, IAction, IAuthState } from "./authReducer";

const init = (): IAuthState => {
  const user = JSON.parse(localStorage.getItem("auth") || "null");
  return {
    name: user?.name,
    logged: !!user,
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const user = {
      id: 123,
      name,
      logged: true,
    };
    const action: IAction = {
      type: authReducerTypes.login,
      payload: user,
    };
    localStorage.setItem("auth", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    const action: IAction = {
      type: authReducerTypes.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
