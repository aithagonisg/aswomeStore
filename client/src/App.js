import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./store/actions/actions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressBar from "./components/Progress";
import CustomizedSnackbars from "./components/Toaster";

function App() {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    dispatch(setUserInfo({ ...userInfo, token }));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <ProgressBar />
        <CustomizedSnackbars />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
