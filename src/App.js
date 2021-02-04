import PropTypes from "prop-types";
import './App.css';

function App({ url }) {
  return (
    <div className="App" >
       <iframe src= {url} />
    </div>
  );
}

App.propTypes = {
  url: PropTypes.string,
}

App.defaultProps = {
  url: 'https://make.cm',
}

export default App;