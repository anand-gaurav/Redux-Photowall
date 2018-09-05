import initpost from '../data/post'
import {combineReducers} from 'redux'

function comments(state = {}, action){
    switch(action.type){
        //[action.postId] in square bracket is ES6 way of defining an attribute (ES6 dynamic property name)
        //[action.comment] is an array of value attached to that postId
        case 'ADD_COMMENT': 
            if(!state[action.postId]){
                return {...state, [action.postId]:[action.comment]}
            }else{
                return {...state, [action.postId]:[...state[action.postId], action.comment]}
            }
        
        default: return state
    }
    
}
// initialize state with value pulled from data/post file
function posts(state = initpost, action){
    //console.log(action.posts)
    switch(action.type){
        case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index +1)]           
        case 'ADD_POST' : return [...state, action.post]
        case 'LOAD_POSTS' : action.posts
        default: return state;
    }
    
}
const rootReducer = combineReducers({posts, comments})
export default rootReducer