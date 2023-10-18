import '../styles/components/_letters.scss'



const SolutionLetters = ({word, userLetters}) => {
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    console.log(wordLetters);

    return wordLetters // todas las letras buscadas por el user
      .map((letter, index) => {
        const exist = userLetters.includes(letter.toLowerCase());
        return (
          <li key={index} className="letter">
            {exist ? letter : ''}
          </li>
        );
      });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución: </h2>

      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionLetters;
 
