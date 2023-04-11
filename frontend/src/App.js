import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Story from "./Components/Story/Story";

function App() {
  const [formData, setFormData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [title, setTitle] = useState("");
  const [newArray, setNewArray] = useState([]);

  const navigate = useNavigate();

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
      <form className="form-body">
        <input
          className="input"
          type="text"
          placeholder={blank}
          id={index}
          onChange={handleFormChange}
          blanks={blank}
          userInput={userInput}
          required
        />
      </form>
    );
  });

  // console.log(blankForm)

  function handleFormChange(event) {
    // prevents the browser from reloading the page upon submit
    event.preventDefault();
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let arr = [];
    for (const key in userInput) {
      arr.push(userInput[key]);
    }
    setNewArray(arr);
    navigate("/story");
  }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div>{blankForm}</div>
        <input
          className="button"
          type="submit"
          value="Submit"
          onClick={handleFormSubmit}
        />
      </div>
      <main>
        <Routes>
          <Route
            path="/story"
            element={
              <Story title={title} inputArr={newArray} story={storyData} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
