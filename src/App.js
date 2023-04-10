import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Story from "./Components/Story/Story";

function App() {
  const [formData, setFormData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      // get request
      let response = await axios.get(`http://localhost:4000/stories`);
      console.log(response.data[0]);
      setFormData(response.data[0].blanks);
      setStoryData(response.data[0].value);
      setTitle(response.data[0].title);
      // catch error in case api call was unsuccessfull
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(formData);
  // console.log(storyData);
  // console.log(title);

 

  return (
    <div className="App">
      <Nav />
      <div>
      </div>
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
