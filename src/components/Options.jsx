const Options = ({handleWord, word}) => {



  const handlesubmitform =(ev) => {
    ev.preventDefault ()


  }

  const handleChange=(ev)=> {
    handleWord (ev.target.value)

   console.log (ev.target.value)


  }

  return (
    <form 
    onSubmit={handlesubmitform}>
  <label className="title" htmlFor="word">
    Escribe aquí la palabra que hay que adivinar:
  </label>
  <input
    autoFocus
    autoComplete="off"
    className="form__input"
    maxLength="15"
    type="text"
    id="word"
    name="word"
    value={word}
    onChange={handleChange}
    
  />
</form>
  )
  
};
export default Options;
