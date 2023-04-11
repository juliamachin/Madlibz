import "./Story.css";

const Story = (words) => {
  const story = words.story.map((inputs, index) => {
    console.log(words)
    if (words !== 0) {
      return (
        <>
          {inputs} {words.inputArr[index]}
        </>
      );
    }
  });

  return (
    <div className="story">
      <h2>{words.title}</h2>
      <p>{story}</p>
    </div>
  );
};

export default Story;
