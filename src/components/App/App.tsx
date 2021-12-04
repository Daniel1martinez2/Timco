import React, { useState, useEffect } from 'react';
import { csvParser } from '../../utils/csvParser'; 
import { fetchCSV } from '../../utils/fetchCSV'; 
import { SliderType } from '../../types/SliderType';
import { NeighborType } from '../../types/NeighborType';

import NeighborList from '../NeighborList/NeighborList';
import SliderList from '../SliderList/SliderList'; 
import Input from '../Input/Input'; 
import classes from './App.module.css';
//@ts-ignore
import DATA from '../../db/data.csv'; 

const DUMMY_SLIDER: SliderType = [
  {id: 's1', value: 100, title: 'Habilidad 1'},
  {id: 's2', value: 100, title: 'Habilidad 2'},
  {id: 's3', value: 100, title: 'Habilidad 3'},
  {id: 's4', value: 100, title: 'Habilidad 4'},
  {id: 's5', value: 100, title: 'Habilidad 5'},
]

const DUMMY_NEIGHBORS: NeighborType[] = [
  {
    name: 'Daniel', 
    value: 80
  },
  {
    name: 'Sofia', 
    value: 20
  },
  {
    name: 'Zac', 
    value: 40
  },
]

function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [sliders, setSlider] = useState(DUMMY_SLIDER);
  
  // useEffect(() => {
  //   fetchCSV(DATA)
  //   .then( value => csvParser(value))
  //   .then(convertedData => console.log(convertedData));
  // }, []); 

  const getValueSlider = (value: SliderType) => setSlider(value);
  const getValue = (value: string) => setInputValue(value); 

  return (
    <div className={classes['app']}>
      <Input 
        type="text" 
        getValue={getValue} 
        value={inputValue}
        title="Número de personas"
      />
      <SliderList sliders={sliders} getValue={getValueSlider} />
      <NeighborList NeighborArray={DUMMY_NEIGHBORS}/>
    </div>
  );
}

export default App;
