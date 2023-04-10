import "./Form.css";

const Form = (props) => {
  <div className="form-body">
      <input
        className="input"
        type="text"
        onChange={props.handleFormChange}
        placeholder={props.blanks}
        id={props.id}
        required
      />
  </div>;
};

export default Form;
