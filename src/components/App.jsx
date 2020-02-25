import React from 'react';
import Header from './Header';
import PostList from './PostList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: {}
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    this.handleClickThumbsUp = this.handleClickThumbsUp.bind(this);
    this.handleClickThumbsDown = this.handleClickThumbsDown.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    const newPostId = newPost.id;
    const newMasterPostList = Object.assign({}, this.state.masterPostList, {[newPostId]: newPost});
    this.setState({masterPostList: newMasterPostList});
  }

  handleClickThumbsUp(id) {
    const likedPost = Object.assign({}, this.state.masterPostList[id], {likes: this.state.masterPostList[id].likes+1});
    const updatedPostList = Object.assign({}, this.state.masterPostList, {[id]: likedPost});
    console.log(updatedPostList);
    this.setState({masterPostList: updatedPostList});
  }

  handleClickThumbsDown(id) {
    const likedPost = Object.assign({}, this.state.masterPostList[id], {likes: this.state.masterPostList[id].likes-1});
    const updatedPostList = Object.assign({}, this.state.masterPostList, {[id]: likedPost});
    this.setState({masterPostList: updatedPostList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=> <PostList postList={this.state.masterPostList} onClickThumbsUp={this.handleClickThumbsUp} onClickThumbsDown={this.handleClickThumbsDown}/>} />
          <Route path='/newpost' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;