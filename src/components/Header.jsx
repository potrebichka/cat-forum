import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Cat Forum</h1>
      <Link to="/">Home</Link> | <Link to="/newpost">Create new post</Link>
    </div>
  );
}

export default Header;