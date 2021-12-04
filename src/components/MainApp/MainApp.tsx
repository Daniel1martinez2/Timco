import { Fragment, useState } from 'react';
import { SliderType } from '../../types/SliderType';
import { NeighborType } from '../../types/NeighborType';

import {fromDataToSlider} from '../../utils/fromDataToSlider'; 
import NeighborList from '../NeighborList/NeighborList';
import SliderList from '../SliderList/SliderList'; 
import Input from '../Input/Input'; 

import { Button } from '@mui/material';

import { createPersonFromSliders } from '../../utils/createPersonFromSliders'; 
import { getKNeighbors } from '../../utils/getKNeighbors'; 

interface MainAppProps {
  data: any
  headers: string[]
}

const MainApp: React.FC<MainAppProps> = ({data, headers}) => {
  const [inputValue, setInputValue] = useState('');
  const [sliders, setSlider] = useState<SliderType>(fromDataToSlider(headers, headers[0]));
  const [neighbors, setNeighbors] = useState<NeighborType[]>();

  const getValueSlider = (value: SliderType) => setSlider(value);
  const getValue = (value: string) => setInputValue(value);
  
  const submitHandler = () => {
    console.log(sliders);
    const proto = createPersonFromSliders(sliders, headers[0]);
    const neighbors = getKNeighbors(data, proto, [headers[0]], parseInt(inputValue))
    console.log(neighbors);
    setNeighbors(neighbors);
  }

  return (
    <Fragment>
      <Input 
        type="text" 
        getValue={getValue} 
        value={inputValue}
        title="Número de personas"
      />
      <SliderList sliders={sliders} getValue={getValueSlider} />
      <Button 
        variant="outlined" 
        color="primary"
        onClick={submitHandler}
      >
        Continuar
      </Button>
      {neighbors && <NeighborList NeighborArray={neighbors}/>}
    </Fragment>
  )
}

export default MainApp
