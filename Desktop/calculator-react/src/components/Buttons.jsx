// This component will be for all of the buttons that we have in our application
import React from 'react'

export const Buttons = (props) => {
  const {label, handleClick} = props;
  return (
    <div>
      <input 
      onClick={handleClick}
      type='button' 
      value={label} 
      name={label}/>
    </div>
  )
}
