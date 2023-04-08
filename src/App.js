import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await axios.get(
        `http://localhost:4000/stories`
      );
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Madlibz</h1>
    </div>
  );
}

export default App;
