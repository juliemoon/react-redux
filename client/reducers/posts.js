/*this is a reducer -- creates new state by updating current state
stores.js has the states- posts & comments
Takes in : action (info about what happened & copy of current state)
returns updated copy of store
*/
function posts(state = [], action){
  console.log('the post will change');
  console.log(state, action);
  return state;
}

export default posts;