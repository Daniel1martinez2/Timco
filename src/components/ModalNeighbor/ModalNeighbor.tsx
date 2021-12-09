import React from 'react';
import ChartTest from '../ChartTest/ChartTest';
import classes from './ModalNeighbor.module.css';

interface ModalNeighborProps {
  name: string;
  data: any;
  image: string;
}

  const getTd = (e:any) => {
    const tdInfo = [];
    for (let key in e) {
      tdInfo.push(parseInt(e[key])); 
    }; 
    return tdInfo;
  } 


  
const ModalNeighbor: React.FC<ModalNeighborProps> = ({name, data, image}) => {
  

  const keys = Object.keys(data).slice(1);
  const info = getTd(data).slice(1);

  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <h1>{name}</h1>
      {/* {keys.map( (key, index) => (
        <li key={index} style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
          <h3>{key}:</h3> <span>{info[index]}</span>
        </li>
      ))} */}
      <ChartTest labels={keys} data={info}/>      
    </div>
  )
}

export default ModalNeighbor



