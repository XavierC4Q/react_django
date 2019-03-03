import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './home.css'

const Home = ({loggedIn, currentUser}) => {

  if (loggedIn) {
    const url = `/profile/${currentUser.pk}`
    return <Redirect to={url}/>
  }
  return (
    <div className='home-wrap'>
      <div className='top-row'>
        <div className='black-box-left'></div>

        <div className='red-orange-row'>
          <div className='red'></div>
          <div className='orange'></div>
        </div>

        <div className='black-box-right'></div>
      </div>

      <div className='left-column'>
        <div className='dark-green'></div>
        <div className='light-green'></div>
      </div>

      <div className='content'>
        <h2>Welcome to Moods</h2>
        <p>Keep entries about how you felt</p>
        <p>Track your own emotional state over time</p>
        <p>100% free and private.</p>
      </div>

      <div className='right-column'>
        <div className='dark-blue'></div>
        <div className='light-blue'></div>
      </div>

      <div className='bottom-row'>
        <div className='black-box-left'></div>

        <div className='yellow-purple-row'>
          <div className='yellow'></div>
          <div className='purple'></div>
        </div>

        <div className='black-box-right'></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {loggedIn: state.authReducer.loggedIn, currentUser: state.authReducer.currentUser}
}

export default connect(mapStateToProps, null)(Home)