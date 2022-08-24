// This component will be for the type of output, i.e. input text and calculated result
import React from 'react'
import './OutputScreenRow.css'

export const OutputScreenRow = (props) => {
  return (
    <div
    className='screen-row'
    >
      <input type='text' readOnly value={props.value}/>
    </div>
  )
}
