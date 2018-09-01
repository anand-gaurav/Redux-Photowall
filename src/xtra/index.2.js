import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const element = React.createElement('h1', null, 'Hello  !');
//                                 //element, props, content
// ReactDOM.render(element, document.getElementById('root'));

const tasks = ['Node.js','Express.js', 'Mongo', 'React'];
const element = React.createElement('ol', null, 
    tasks.map((task, index) => React.createElement('li', {key: index}, task)));
    ReactDOM.render(element, document.getElementById('root'));
