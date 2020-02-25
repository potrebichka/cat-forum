import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';


const Post = (props) => {
  return (
    <div>
      <style>{`
            img {
                width: 200px
            }
            span {
                margin: 5px;
                cursor: pointer
            }
        `}</style>
      <h3>{props.title}</h3>
      <img src={props.url} alt={props.title}/>
      <p>Likes: {props.likes}</p>
      <span> <FontAwesomeIcon icon={faThumbsUp} onClick={props.onClickThumbsUp}/> </span>
      <span> <FontAwesomeIcon icon={faThumbsDown} onClick={props.onClickThumbsDown}/></span> 
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClickThumbsDown: PropTypes.func,
  onClickThumbsUp: PropTypes.func
};

export default Post;