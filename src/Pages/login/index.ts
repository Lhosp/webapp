import { login } from "./../../Redux/Action/user";
import { connect } from "react-redux";
import { SignIn } from "./login";
import { AnyAction, Dispatch, bindActionCreators } from "redux";

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators(
      {
        login,
      },
      dispatch
    ),
  };
}

export default connect(mapDispatchToProps)(SignIn);
