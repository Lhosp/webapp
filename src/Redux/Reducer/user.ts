import { UserAction } from "../../Types/reducer";
import { LOGIN } from "../Action/user";

const initialState = {
  user: { name: "", email: "" },
};

export default function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}
