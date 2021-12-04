import React, { useState, useEffect } from 'react';
import { csvParser } from '../../utils/csvParser'; 
import { fetchCSV } from '../../utils/fetchCSV'; 
import classes from './App.module.css';
import MainApp from '../MainApp/MainApp';
//@ts-ignore
import DATA from '../../db/data.csv';

function App() {
  const [dataBase, setDataBase] = useState<any>(null); 

  useEffect(() => {
    fetchCSV(DATA)
    .then( value => csvParser(value))
    .then(convertedData => {
      setDataBase(convertedData);
    });
  }, []);

  return (
    <div className={classes['app']}>
      {dataBase && <MainApp headers={dataBase.headers} data={dataBase.parsedData}/>}
    </div>
  );
}

export default App;
