import React, { Fragment, useState } from 'react';
import { csvParser } from '../../utils/csvParser'; 
import { fetchCSV } from '../../utils/fetchCSV'; 
import { Button, Slider, TextField } from '@material-ui/core'; 
import SliderContainer from '../SliderContainer/SliderContainer'
import Input from '../Input/Input'; 
import classes from './App.module.css'; 
//@ts-ignore
import DATA from '../../db/data.csv'; 



function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [slider, setSlider] = useState<number | number[]>(40)
  fetchCSV(DATA)
  .then( value => csvParser(value))
  .then(convertedData => console.log(convertedData));
  const getValue = (value: string) => {
    setInputValue(value)
  }
  return (
    <div className={classes['app']}>
      <h1>{inputValue}</h1>
      <Input type="number" getValue={getValue} value={inputValue}/>
      <SliderContainer name="" value={slider} onChange={(_, values) => setSlider(values) }/>
    </div>
  );
}

export default App;
