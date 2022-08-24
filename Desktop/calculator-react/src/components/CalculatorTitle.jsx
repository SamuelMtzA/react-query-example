//This component will be used to render the title at the top of our application
import React from 'react'
import './CalculatorTitle.css'

export const CalculatorTitle = (props) => {
  const { title } = props
  return (
    <div
    className='calculator-title'
    >
      {title}
    </div>
  )
}
