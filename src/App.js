import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Story from "./Components/Story/Story";

function App() {
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await axios.get(`http://localhost:4000/stories`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
