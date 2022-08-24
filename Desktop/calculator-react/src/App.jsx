import { useState } from 'react'
import './App.css'
import { Buttons } from './components/Buttons'
import { CalculatorTitle } from './components/CalculatorTitle'
import { OutputScreen } from './components/outputScreen'

function App() {

  const [output, setOutput] = useState({
    userInput: '',
    result: ''
  })

  const handleClick = (e) => {
    const { value } = e.target;

    switch ( value ) {
      case '=':
        if (output.userInput) {
          setOutput({
            ...output,
            result: eval(output.userInput)
          })
        }
        break;
      case 'Clear':
        setOutput({
          ...output,
          userInput: '',
          result: ''
        })
        break;
      
      case 'Delete':
        setOutput({
          ...output,
          userInput: output.userInput.slice(0, -1)
        })
        break;
    
      default:
        setOutput({
          ...output,
          userInput: output.userInput + value
        })
        break;
    }
  }

  return (
    <div className='App'>
      <CalculatorTitle title={"Basic Calculator"}/>
      <div className='main-calc'>
        <OutputScreen value ={output}/>
        <div className='buttons-row'>
          <Buttons handleClick={handleClick} label={'Clear'}/>
          <Buttons handleClick={handleClick} label={'Delete'}/>
          <Buttons handleClick={handleClick} label={'.'}/>
          <Buttons handleClick={handleClick} label={'/'}/>
        </div>
        <div className='buttons-row'>
          <Buttons handleClick={handleClick} label={'7'}/>
          <Buttons handleClick={handleClick} label={'8'}/>
          <Buttons handleClick={handleClick} label={'9'}/>
          <Buttons handleClick={handleClick} label={'*'}/>
        </div>
        <div className='buttons-row'>
          <Buttons handleClick={handleClick} label={'4'}/>
          <Buttons handleClick={handleClick} label={'5'}/>
          <Buttons handleClick={handleClick} label={'6'}/>
          <Buttons handleClick={handleClick} label={'-'}/>
        </div>
        <div className='buttons-row'>
          <Buttons handleClick={handleClick} label={'1'}/>
          <Buttons handleClick={handleClick} label={'2'}/>
          <Buttons handleClick={handleClick} label={'3'}/>
          <Buttons handleClick={handleClick} label={'+'}/>
        </div>
        <div className='buttons-row'>
          <Buttons handleClick={handleClick} label={'0'}/>
          <Buttons handleClick={handleClick} label={'='}/>
        </div>
      </div>
    </div>
  )
}

export default App
