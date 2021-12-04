import React, { useState, useEffect } from 'react';
import { csvParser } from '../../utils/csvParser'; 
import { fetchCSV } from '../../utils/fetchCSV'; 
import classes from './App.module.css';
import Core from '../MainTim/Sprint';
import { SliderType } from '../../types/SliderType';
import SliderList from '../SliderList/SliderList';
import { fromDataToSlider } from '../../utils/fromDataToSlider';
//@ts-ignore
import DATA from '../../db/data.csv';

const DUMMY_SLIDER: SliderType = [
  {id: 's1', value: 100, title: 'Habilidad 1'},
  {id: 's2', value: 100, title: 'Habilidad 2'},
  {id: 's3', value: 100, title: 'Habilidad 3'},
  {id: 's4', value: 100, title: 'Habilidad 4'},
  {id: 's5', value: 100, title: 'Habilidad 5'},
]


function App() {
  const [dataBase, setDataBase] = useState<any>(null); 

  useEffect(() => {
    fetchCSV(DATA)
    .then( value => csvParser(value))
    .then(convertedData => {
      setDataBase(convertedData);
      console.log(convertedData);
    });
  }, []);

  return (
    <div className={classes['app']}>
      {dataBase && <Core headers={dataBase.headers} data={dataBase.parsedData}/>}
    </div>
  );
}

export default App;
