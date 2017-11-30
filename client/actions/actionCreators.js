/*action is object being returned and the function is action dispatcher
 */
//increment actions returns an object
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment -- payload = anything after the type
export function addComment(postId, author, comment){
  return{
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//remove comment -- what post to remove and the index
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
