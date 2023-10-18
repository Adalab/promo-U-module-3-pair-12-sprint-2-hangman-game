import { useState, useEffect } from 'react';
// import viteLogo from '/vite.svg'
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear
import '../styles/App.scss';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';



function App() {
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('');
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setuserLetters] = useState([]);

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setWord(response.word);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  
  const renderErrorLetters = () => {
    const noExist = userLetters.filter(
      (letter) => word.includes(letter) === false
    );

    if (noExist.length !== numberOfErrors) {
      setNumberOfErrors(noExist.length);
    }

    return noExist.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  /*   const handleClick = () => {
    setNumberOfErrors(++numberOfErrors);
    console.log(numberOfErrors);
  }; */

  const handleInput = (ev) => {
    console.log(ev.target.value);
    const letterValue = ev.target.value.toLowerCase();
    const regex = /[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]/;

    if (letterValue === '' || regex.test(letterValue)) {
      setLastLetter(letterValue);
    }
    if (
      letterValue !== '' &&
      regex.test(letterValue) &&
      !userLetters.includes(letterValue)
    ) {
      setuserLetters([letterValue, ...userLetters]);
    }
    /* OTRA OPCIÓN
      // const validLetters = 'abcdefghijklmnopqrstuvwxyzáéíóúüABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜ'

      if(validLetters.includes(letterValue)){
        setLastLetter(letterValue);
      } 
    */
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="page">
        <Header />

        <main className="main">
          <section>
            <SolutionLetters word= {word} 
            userLetters={userLetters}  />
            <ErrorLetters
            renderErrorLetters={renderErrorLetters}
            
            />
            <Form lastLetter={lastLetter}
            handleSubmit={handleSubmit}  />
          
        
          </section>
          {/*         <button onClick={handleClick} className="btn-visible">
            Incrementar
          </button> */}

          <Dummy numberOfErrorsProp={numberOfErrors} />
        </main>
      </div>
    </>
  );
}

export default App;
