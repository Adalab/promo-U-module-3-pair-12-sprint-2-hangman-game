import '../styles/components/_form.scss';

const Form = ({ lastLetter, handleInput }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const updateInput = (ev) => {
    handleInput(ev.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        onChange={updateInput}
        value={lastLetter}
      />
    </form>
  );
};

export default Form;
