import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component{
  render(){
    // create variables for post, i, comments = this.props
    const { post, i, comments } = this.props;
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
        {/* <Link to= {`/view/${this.props.post.code}`}*/}
          <Link to={`/view/${post.code}`}>
            {/* {post.caption} */}
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>
            <CSSTransitionGroup transitionName="like" 
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              <span key={post.likes} className="likes-heart">
                {post.likes}
              </span>
            </CSSTransitionGroup>
        </div>
        <figcaption>
          {/* adding caption to photo */}
          <p>{post.caption}</p>
          {/* creating div to place the button and add a heart and number to it */}
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts;{post.likes}</button>
            <Link className ="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble">
                  {/* if my photos have comments then show the length of the comments or show 0 */}
                  {comments[post.code] ? comments[post.code].length : 0 }
                </span>
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

export default Photo;