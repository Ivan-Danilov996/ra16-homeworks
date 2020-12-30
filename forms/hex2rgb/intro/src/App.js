import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({ hexValue: '', rgbValue: 'rgb', style:{backgroundColor: '#ffffff'}})

  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setState(prevValue => ({
        ...prevValue, rgbValue:
          `rgb(${parseInt(result[1], 16)}, 
              ${parseInt(result[2], 16)}, 
            ${parseInt(result[3], 16)})`,
            style:{backgroundColor: hex}

      }))
    } else {
      setState(prevValue => ({ ...prevValue, rgbValue: 'ошибка' }))
    }
  }

  const changeInput = (e) => {
    setState(prevValue => ({ ...prevValue, hexValue: e.target.value }))
    if (e.target.value.length === 7) {
      hexToRgb(e.target.value)
    } else {
      setState(prevValue => ({ ...prevValue, rgbValue: 'rgb' }))
    }
  }

  return (
    <div className="container">
      <div style={state.style} className="converter">
        <input
          className="hex"
          type="text"
          placeholder="hex"
          value={state.hexValue}
          onChange={changeInput}
        />
        <div className="result">{state.rgbValue}</div>
      </div>
    </div>
  );
}

export default App;
