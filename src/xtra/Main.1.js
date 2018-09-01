// Importing Component property from React
import React, { Component } from 'react';
import Title from '../Components/Title';
import Photowall from '../Components/PhotoWall';
import AddPhoto from '../Components/AddPhoto'

class Main extends Component {
    /*
     called before component is mounted. NEVER put side effect code inside of the constructor.
     Use ComponentDidMount for that instead. 
     Commonly used to initialize state or bind methods.
    */
    constructor() {
        super();
        //setting in the initial state of post as empty
        this.state = {
            posts: [],
            screen: 'photos' //photos,addPhoto
        };
        //below line of code helps bind 'this' in removePhoto method as the access of current state is required
        // in other lifecyle methods like contructor, render, componentDidMount etc will by default have access to this attribute.
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        console.log('constructor')
    };

    render() {
        //never fetch data inside of render. Should only be used to return elements.
        console.log('render')
        return (
            <div>
                {this.state.screen === 'photos' && (
                    <div>
                    <Title title={'Photowall'} />
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                    </div>
                )
                }
            
            <div>
                {this.state.screen === 'addPhoto' && (
                <AddPhoto/>)
                }                
            </div>
            </div>
        );
    }

    componentWillMount() {
        /*
        invoked immediately before mounting occurs. Called before render. 
        Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method 
        */
        console.log('componentWillMount')
    }

    componentDidMount() {
        /*
         Perfect place to fetch data. It gets called after render. 
         This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render.
         This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
        */
        //whenever fetching data async, its best to do after the component is mounted after its inserted into the DOM and added to the view.
        //thumb rule, whenever making db call or fetching data from asyn, have the call inside componentDidMount method of React lifecycle.
        // this is more like onLoad method
        const data = this.simulateFetchDataFromDB();
        //below execution does not need the current state, hence no callback being passed and directly setting the new state value of posts.
        this.setState({
            posts: data
        })
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        /*
        called when the state of a component changes. 
        Perfect place to update UI or make network calls based on previous state before update, and current state
        */
        //this lifecycle method is invoked after render method finishes its task.
        //if state is modified, render method will get invoked and post render method componentDidUpdate will get invoked.
        console.log('Prev Props')
        console.log(prevProps)
        console.log('Prev state')
        console.log(prevState.posts)
        console.log('Current state')
        console.log(this.state.posts)
    }

    navigate(){
        this.setState({
            screen: 'addPhoto'
        })
        
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        //whenever the state changes render method is automatically invoked
        this.setState((prevState) => {
            return { posts: prevState.posts.filter(post => post !== postRemoved) };
        });
    };

    simulateFetchDataFromDB() {
        return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
        }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }
};

export default Main