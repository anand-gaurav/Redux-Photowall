import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//https://stackoverflow.com/questions/40703675/react-functional-stateless-component-purecomponent-component-what-are-the-dif

function PhotoWall(props) {
    return <div>
            {/* <button className="addIcon" onClick={props.onNavigate}></button> */}
            {/* <a onClick={props.onNavigate} className="addIcon" href="#AddPhoto"> </a> */}
            <Link className="addIcon" to="AddPhoto"> </Link> 
            <div className="photo-grid">
                {props.posts
                .sort((x,y)=> {
                    return (y.id - x.id)
                })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
            </div>
           </div>
}
// class PhotoWall extends Component{
//     render() {
//         return <div className="photo-grid">
//             {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
//         </div>
//     }
// }

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall