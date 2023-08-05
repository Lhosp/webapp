import { AnyAction } from "redux";
import { Client4 } from "../../Client/client4All";
import { AuthUser, User } from "../../Types/user";
import { AppDispatch, RootState } from "../store";
import { ThunkAction } from "redux-thunk";
export function userLogin(
  usr: User
): ThunkAction<void, RootState, null, AnyAction> {
  return async function userLogionThunk(
    dispatch: AppDispatch,
    getState: () => RootState
  ) {
    try {
      console.log(usr);
      const response:AuthUser = await Client4("POST", "api/auth/login/", usr);
     
      dispatch({ type: "USER_LOGIN", payload: response });
      response.token && localStorage.setItem("token", response.token);
    } catch (e: any) {
      // const response = await client.post("/fakeApi/todos",  user);
      // dispatch({ type: "todos/todoAdded", payload: response.todo });
      console.log(e);
    }
  };
}

export function userLoggedIn(): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> {
    return async function userLogionThunk(
        dispatch: AppDispatch,
        getState: () => RootState
    ) {
        try {
        const response = await Client4("GET", "api/auth/user/");
        dispatch({ type: "USER_LOGGED_IN", payload: response });
        } catch (e: any) {
        // const response = await client.post("/fakeApi/todos",  user);
        // dispatch({ type: "todos/todoAdded", payload: response.todo });
        console.log(e);
        }
    };
    }
