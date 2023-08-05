import { ActionFromReducer, AnyAction } from "redux";
import { User } from "../../Types/user";

const initialState = {
  email: "",
  password: "",
  status: false,
  message: "",
  token: "",
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    // omit other reducer cases
    case "USER_LOGGED_IN":
        return { ...state, status: true };
    case "USER_LOGIN": {
      if(localStorage.getItem("token")){
        state.status=true;
      }
      return ({ state } = action.payload);
    }
    default:
      return state;
  }
}
