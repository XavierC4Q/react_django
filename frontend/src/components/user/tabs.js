import React from 'react';
import {Link} from 'react-router-dom';

import './user.css';

const Tabs = ({id}) => {

  const newMoodUrl = `/profile/${id}/new`;
  const mainProfileUrl = `/profile/${id}`;
  const editUserUrl = `/profile/${id}/edit`;

  return (
    <nav className='tabs-wrap'>
      <Link className='tab' to={mainProfileUrl}>Your Moods</Link>
      {" "}
      <Link className='tab' to={newMoodUrl}>New Entry</Link>
      {" "}
      <Link className='tab' to={editUserUrl}>Edit</Link>
      {" "}
    </nav>
  );
}

export default Tabs;