import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';
import posts from './posts.js';
import comments from './comments.js';

//rootReducer will hold all our mini reducers 
//this is found in store.js
//combineReducer ::hover-over:: takes in object:key
const rootReducer = combineReducers({ posts, comments, routing:routerReducer });
export default rootReducer;