import './App.css';
import {Row, Col, Button, Input} from 'reactstrap';
import { useState } from 'react';
import React from 'react';


function App() {
  const [color, setColor] = useState('red');
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('Let\'s Begin the game!');

  const colors = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
    yellow: '#FFFF00',
    orange: '#FFA500',
    purple: '#800080',
    pink: '#FFC0CB',
    brown: '#A52A2A',
    gray: '#808080',
    black: '#000000'
  };

  const handleColorReset = () => {
    const colorKeys = Object.keys(colors);
    const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    setColor(colors[randomColorKey]);
  };

  const checkGuess = () => {
    if ("#"+guess === colors[color]) {
      setResult('You guessed correctly!');
    } else {
      setResult('You guessed incorrectly!');
    }
  }

  return (
    <div className="App">
      <Row>
        <Col sm="12" className='mt-5'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <Row>
              <Col sm={12} style={{ height: '200px', backgroundColor: color }}></Col>
              
              {/* Input to write down guess */}
              <Col sm={8} className='mt-4'>
                <Input
                  type="text"
                  placeholder="Enter your guess"
                  style={{width:'80%'}}
                  onChange={(e) => {
                    setGuess(e.target.value);
                  }}
                />
              </Col>
              <Col sm={4} className='mt-4'>
                <Button color='info' onClick={checkGuess}>Check</Button>
              </Col>
              <Col sm={12} className='mt-4'>
                <h3>Guess: {result}</h3>
              </Col>
              <Col sm={12} className='mt-4'>
                <Button color='info' onClick={handleColorReset}>Reset Color</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
