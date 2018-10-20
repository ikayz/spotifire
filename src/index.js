import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './css/main.css';

const App = () => {
    return(
      <div>
        <Header/>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
