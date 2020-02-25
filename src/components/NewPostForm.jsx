import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewPostForm(props) {
  const inputStyling = {
    marginTop: '20px',
    width: '100%'
  };
  const buttonStyling = {
    fontSize: '20px',
    backgroundColor: '#5bc0de',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px'
  };
  let _title = null;
  let _url = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault;
    props.onNewPostCreation({title: _title.value, url: _url.value, id: v4(), likes: 0});
    _title.value = '';
    _url.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          style={inputStyling}
          type="text"
          id="title"
          placeholder="Some title" 
          ref={(input) => {_title = input;}}
        />
        <br/>
        <textarea
          style={inputStyling}
          type="text"
          id="url"
          placeholder="https://www.somewebpage.com/image.jpg"
          ref={(textarea) => {_url = textarea;}}
        />
        <button type="submit" style={buttonStyling}>Add</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;