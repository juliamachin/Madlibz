import "./Story.css";

const Story = (words) => {
  const story = words.story.map((inputs, index) => {
    console.log(words);
    if (inputs !== 0) {
      return (
        <>
          {inputs} {words.inputArr[index]}
        </>
      );
    }
  });

  return (
    <div className="modal-content">
      <span
        className="close"
        onClick={() => {
          const element = document.querySelector(".modal-content");
          element.style.display = "none";
        }}
      >
        &times;
      </span>
      <h2>{words.title}</h2>
      <p>{story}</p>
    </div>
  );
};

export default Story;
