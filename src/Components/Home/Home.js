import "./Home.css";

const Home = (props) => {
  <div>
    <form>
      <input
        className="input"
        type="text"
        onChange={props.handleFormChange}
        placeholder={props.blanks}
        id={props.id}
        required
      />
    </form>
  </div>;
};

export default Home;
