import React from 'react';

import './util.css';

export const Input = ({type, name, value, label, handleChange, placeholder}) => (
  <div className='input-wrap'>
    <label className='input-label'>{label}</label>
    <input
      type={type}
      name={name}
      className='inputs'
      value={value}
      placeholder={placeholder}
      onChange={handleChange}/>
  </div>
);