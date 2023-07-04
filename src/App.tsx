import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Article from "./Pages/Article";
import Projets from "./Pages/Projets";
import Devis from "./Pages/Devis";
import Client from "./Pages/Client";
import Fournisseur from "./Pages/Fournisseur";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/login";
import SignUp from "./Pages/SignUp";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/Reducer";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
    </Provider>
  );
}

export default App;
