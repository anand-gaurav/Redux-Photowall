import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const element = React.createElement('h1', null, 'Hello  !');
//                                 //element, props, content
// ReactDOM.render(element, document.getElementById('root'));

const tasks = ['Node.js', 'Express.js', 'Mongo', 'React'];
// const element = React.createElement('ol', null, 
//     tasks.map((task, index) => React.createElement('li', {key: index}, task)));
//Now with JSX approach
/*
const element =
    <div>
        <h1>Task Lists</h1>
        <ol>
            {tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>
    </div>
*/

class Title extends Component {
    render() {
        return <h1>Task Lists</h1>;
    }
}

class List extends Component {
    render() {
        return (
            <ol>
                {tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <List />
                <List />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
