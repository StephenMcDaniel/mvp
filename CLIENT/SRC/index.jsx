import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var table = {
id: 1,
category_id: 1,
phrase: 'I would like a hamburger, please.',
url: 'https://pixabay.com/images/id-576419/'
}

ReactDOM.render(<App table={table}/>,document.getElementById('app'));