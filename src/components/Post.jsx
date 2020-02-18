import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: 0};
    this.handleClickThumbsDown = this.handleClickThumbsDown.bind(this);
    this.handleClickThumbsUp = this.handleClickThumbsUp.bind(this);
  }

  handleClickThumbsUp() {
    this.setState({likes: this.state.likes+1});
  }

  handleClickThumbsDown() {
    this.setState({likes: this.state.likes-1});
  }

  render () {
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
        <h3>{this.props.title}</h3>
        <img src={this.props.url} alt={this.props.title}/>
        <p>Likes: {this.state.likes}</p>
        <span> <FontAwesomeIcon icon={faThumbsUp} onClick={this.handleClickThumbsUp}/> </span>
        <span> <FontAwesomeIcon icon={faThumbsDown} onClick={this.handleClickThumbsDown}/></span> 
      </div>
    );
  }

}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Post;