import { Fragment, useState } from 'react';
import { SliderType } from '../../types/SliderType';
import { NeighborType } from '../../types/NeighborType';

import {fromDataToSlider} from '../../utils/fromDataToSlider'; 
import NeighborList from '../NeighborList/NeighborList';
import SliderList from '../SliderList/SliderList'; 
import Input from '../Input/Input'; 

import { Button } from '@mui/material';

// const DUMMY_SLIDER: SliderType = [
//   {id: 's1', value: 100, title: 'Habilidad 1'},
//   {id: 's2', value: 100, title: 'Habilidad 2'},
//   {id: 's3', value: 100, title: 'Habilidad 3'},
//   {id: 's4', value: 100, title: 'Habilidad 4'},
//   {id: 's5', value: 100, title: 'Habilidad 5'},
// ]

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

interface mainTimProps {
  data: any
  headers: string[]
}

const MainTim: React.FC<mainTimProps> = ({data, headers}) => {
  const [inputValue, setInputValue] = useState('');
  const [sliders, setSlider] = useState<SliderType>(fromDataToSlider(headers, headers[0]));

  const getValueSlider = (value: SliderType) => setSlider(value);
  const getValue = (value: string) => setInputValue(value);
  const submitHandler = () => {
    console.log(sliders);
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
      <NeighborList NeighborArray={DUMMY_NEIGHBORS}/>
    </Fragment>
  )
}

export default MainTim
