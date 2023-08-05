
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Client from "./Pages/Client";
import Devis from "./Pages/Devis";
import Fournisseur from "./Pages/Fournisseur";
import Profile from "./Pages/Profile";
import Projets from "./Pages/Projets";
import Setting from "./Pages/Setting";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/login/login";
import { connect } from "react-redux";
import { RootState } from "./Redux/store";
import Home from "./Pages/Home";
import Article from "./Pages/Article";

const MapStateToProps = (state: RootState) => {
  return {
    user: state.user,
  };
};

export function Main(props: any) {
  const { isAuth } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/projets" element={<Projets />}></Route>
          <Route path="/devis" element={<Devis />}></Route>
          <Route path="/clients" element={<Client />}></Route>
          <Route path="/articles" element={<Article />}></Route>
          <Route path="/fournisseurs" element={<Fournisseur />}></Route>
        </Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default connect(MapStateToProps)(Main);
