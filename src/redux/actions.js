
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