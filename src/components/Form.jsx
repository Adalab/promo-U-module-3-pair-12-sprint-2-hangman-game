import '../styles/components/_form.scss'


const Form = ({lastLetter, handleSubmit})=> {

//     const handleSubmit=(ev)=> {
//         handleSubmit(ev.preventDefault())

// }
return(
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
      onChange={handleInput}
      value={lastLetter}
    />
  </form>
)

}


export default Form