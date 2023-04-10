import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Form from "./Components/Form/Form";
import Story from "./Components/Story/Story";
import Home from "./Components/Home/Home";

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
      // console.log(response.data[0]);
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

  // `.map() function to return the items in the blanks array`
  const blankForm = formData.map((blank, index) => {
    // console.log(blank);
    return (
      <Form
        handleFormChange={handleFormChange}
        blanks={blank}
        id={index}
        userInput={userInput}
      />
    );
  });

  function handleFormChange(event) {
    event.preventDefault();
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });

    //  console.log(userInput);
  }

  return (
    <div className="App">
      <Nav />
      <div>
        <form>{blankForm}</form>
        <input
          className="button"
          type="submit"
          value="Submit"
        />
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
