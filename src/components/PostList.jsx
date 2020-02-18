import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      <hr />
      {props.postList.map((post) =>
        <Post title={post.title} 
          url={post.url} 
          key={post.id}/>)}
      <hr />
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;