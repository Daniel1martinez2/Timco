import React, { useState, useEffect } from 'react';
import { csvParser } from '../../utils/csvParser'; 
import { fetchCSV } from '../../utils/fetchCSV'; 
import classes from './App.module.css';
import MainApp from '../MainApp/MainApp';
import { ThemeProvider, createTheme} from '@material-ui/core';
import { teal, deepPurple } from '@mui/material/colors';
//@ts-ignore
// import DATA from '../../db/data.csv';
import DATA from '../../db/evaluacion_hanilidades.csv';

const customTheme = createTheme({
  palette:{
    primary: {
      main: teal[500]
    }, 
    secondary: {
      main: '#122930'
    },
    error: {
      main: deepPurple[50]
    }

  }
})

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
    <ThemeProvider theme={customTheme}>
      <div className={classes['app']}>
        {dataBase && <MainApp headers={dataBase.headers} data={dataBase.parsedData}/>}
      </div>
    </ThemeProvider>
  );
}

export default App;
