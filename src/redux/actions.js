
import {database} from '../database/config'

export function startAddingPost(post){
    //using thunk we can return a function
    return (dispatch) => {
        // promise function returned by firebase. [post.id] is ES6 trick (dynamic property name) of declaring property id as a key in an object
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch) => {
       return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            //console.log(posts)
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}


// below is an action creator which returns an object
// its a named export function
export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post    
    }
}

export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}