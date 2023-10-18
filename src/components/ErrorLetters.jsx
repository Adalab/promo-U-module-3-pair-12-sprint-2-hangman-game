
import PropTypes from 'prop-types';
import '../styles/components/_letters.scss'

const ErrorLetters = ({renderErrorLetters})=> {
    
    return (
        <div className="error">
        <h2 className="title">Letras falladas:</h2>
        <ul className="letters">{renderErrorLetters()}</ul>
      </div>



    )
};

ErrorLetters.propTypes = {
    renderErrorLetters: PropTypes.func, 
  };

export default ErrorLetters;

