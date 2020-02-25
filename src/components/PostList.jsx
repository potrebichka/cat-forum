import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      <hr />
      {Object.keys(props.postList).map(function(postId)
      {
        var post = props.postList[postId];
        return <Post title={post.title} 
          url={post.url} 
          id = {post.id}
          likes = {post.likes}
          key={post.id}
          onClickThumbsUp={() => props.onClickThumbsUp(postId)}
          onClickThumbsDown={() =>props.onClickThumbsDown(postId)}/>;
      }
      )}
      <hr />
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onClickThumbsUp: PropTypes.func,
  onClickThumbsDown: PropTypes.func
};

export default PostList;