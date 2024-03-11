import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState('');

    const handlebuttonClick = (value) => {
        setResult(result + value);
    };

    const calculateResult = () => {
        setResult(eval(result));
    }

  return (
    <div>
        <input type="text" value={result} readOnly />
        <div>
            <button onClick={() => handlebuttonClick('1')}> 1 </button> { " " }
            <button onClick={() => handlebuttonClick('2')}> 2 </button>
            <button onClick={() => handlebuttonClick('3')}> 3 </button>
            <button onClick={() => handlebuttonClick('4')}> 4 </button>
            <button onClick={() => handlebuttonClick('+')}> + </button>
            <button onClick={() => handlebuttonClick('-')}> - </button>
            <button onClick={() => handlebuttonClick('*')}> * </button>

            <button onClick={calculateResult}>=</button>
        </div>
    </div>
  )
}

export default Calculator