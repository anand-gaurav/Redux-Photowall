// Importing named export 'Component' from React library
import React, { Component } from 'react';
import Header from './Header';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import SinglePhoto from './SinglePhoto'

class Main extends Component {
    /*
     called before component is mounted. NEVER put side effect code inside of the constructor.
     Use ComponentDidMount for that instead. 
     Commonly used to initialize state or bind methods.
    */
    // constructor() {
    //     super();
    // };

    componentDidMount(){        
        this.props.startLoadingPost()
    }

    render() {
        return (
            <div>
               <Header title="Photowall"/>
                <Route exact path="/" render={() => (
                    <div>                       
                        <Photowall {...this.props}/>
                    </div>
                )} />
                {/* history is the property of params object data. notice the curly braces */}
                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props}/>
                )} />
                {/* below params object contains history property as well. Notice the brackets instead of curly braces */}
                <Route path="/single/:id" render={(params) => (
                    <SinglePhoto {...this.props}{...params}/>
                )} />
            </div>)

    }    

};

export default Main