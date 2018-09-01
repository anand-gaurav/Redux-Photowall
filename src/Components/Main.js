// Importing named export 'Component' from React library
import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'
import * as actions from '../redux/actions'

class Main extends Component {
    /*
     called before component is mounted. NEVER put side effect code inside of the constructor.
     Use ComponentDidMount for that instead. 
     Commonly used to initialize state or bind methods.
    */
    constructor() {
        super();
    };

    // componentDidMount(){
    //     //this.props.dispatch(removePost(1))
    //     this.props.removePost(1)
    // }

    render() {     
        console.log(this.props)  
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={'Photowall'} />
                        <Photowall {...this.props}/>
                    </div>
                )} />
                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props}/>
                )} />
            </div>)

    }    

};

export default Main