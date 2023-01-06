import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    dispatch(setUserInfo({ ...userInfo, token }));
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
