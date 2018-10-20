import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './css/main.css';

const App = () => {
    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
