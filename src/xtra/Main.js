// Importing Component property from React
import React, {Component} from 'react';
import Title from './Title'
import List from './List'


class Main extends Component {
    render() {
        return (
            <div>
                <Title title={'Front End Technologies'}/>
                <List tasks={['Node.js','Express','React.js']}/>
                <Title title={'Backend End Technologies'}/>
                <List tasks={['Mongo DB','Firebase']}/>
            </div>
        );
    }
}

export default Main