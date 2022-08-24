// This Component will be for all of the text shown on the screen
import React from 'react'
import { OutputScreenRow } from './OutputScreenRow'

export const OutputScreen = (props) => {
  const { userInput, result } = props.value;
  return (
    <div
    className='screen'
    >
      <OutputScreenRow value ={userInput}/>
      <OutputScreenRow value={result}/>
    </div>
  )
}
