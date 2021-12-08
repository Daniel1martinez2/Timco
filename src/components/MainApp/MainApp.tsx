import { Fragment, useState } from 'react';
import { SliderType } from '../../types/SliderType';
import { NeighborType } from '../../types/NeighborType';

import {fromDataToSlider} from '../../utils/fromDataToSlider'; 
import NeighborList from '../NeighborList/NeighborList';
import SliderList from '../SliderList/SliderList'; 
import Input from '../Input/Input'; 
import logo from '../../lib/svg/logo.svg'

import { Button, FormControl, InputLabel, MenuItem, Select } from  '@material-ui/core';

import { createPersonFromSliders } from '../../utils/createPersonFromSliders'; 
import { getKNeighbors } from '../../utils/getKNeighbors'; 
import {getSystemAggregationTVector} from '../../utils/getSystemAggregationTVector';
import { getTemporalVector } from '../../utils/getTemporalVector';
import { getTransformedData } from '../../utils/getTransformedData';
import {marketing, design, mix} from '../../utils/profilesDefault'; 

interface MainAppProps {
  data: any
  headers: string[]
};
type SelectHandlerType = ((event: React.ChangeEvent<{name?: string | undefined;value: unknown;}>, child: React.ReactNode) => void);

const MainApp: React.FC<MainAppProps> = ({data, headers}) => {
  const [aggregation, setAggregation] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [sliders, setSlider] = useState<SliderType>(fromDataToSlider(headers, headers[0]));
  const [neighbors, setNeighbors] = useState<NeighborType[]>();

  const getValueSlider = (value: SliderType) => setSlider(value);
  const getValue = (value: string) => setInputValue(value);
  


  const submitHandler = () => {
    if(!inputValue) return; 
    const proto = createPersonFromSliders(sliders, headers[0]);
    const neighbors = getKNeighbors(data, proto, [headers[0]], parseInt(inputValue));
    const transformedData = getTransformedData(data, sliders.map(s => {
      if(typeof s.value === 'number'){
        return s.value/100
      }
      return 0
    }),headers[0]);    

    //Enhance the variable names, and the setup as well
    const neighborsVector = transformedData.filter((n:any) => {
      return neighbors.map( a => a.name).includes(n[headers[0]]);
    });
    const tempVec = getTemporalVector(neighborsVector,headers[0]);
    const aggregationVectorData = getSystemAggregationTVector(aggregation,tempVec,transformedData, headers[0]);
    const aggregationPerson= {[headers[0]]: 'Aggregation person', ...aggregationVectorData}; 
    const neighborsFinal = getKNeighbors(data, aggregationPerson, [headers[0]], parseInt(inputValue));
    setNeighbors(neighborsFinal);

  }

  const selectHandler:SelectHandlerType = (event) => {
    if(typeof event.target.value === 'string' ){
      setAggregation(event.target.value);
    }
  }

  const profileHandler = (profile: 'marketing' | 'design' | 'mix') => {
    let profileArray:number[] = []; 
    switch(profile){
      case 'marketing': profileArray = marketing
      break;
      case 'design': profileArray = design
      break;
      case 'mix': profileArray = mix
      break;
    }
    setSlider(prev => prev.map((slider, index) => ({...slider, value: profileArray[index]*10})))
  }

  return (
    <Fragment>
      {/* <img src={logo} alt="logo"/> */}
      <Input 
        type="number" 
        getValue={getValue} 
        value={inputValue}
        title="Número de personas"
      />
      <Button 
        variant="outlined"
        type="button"
        color="primary"
        onClick={() => profileHandler('marketing')}
      >
        Marketing
      </Button>
      <Button 
        variant="outlined"
        type="button"
        color="primary"
        onClick={() => profileHandler('design')}
      >
        Design
      </Button>
      <Button 
        variant="outlined"
        type="button"
        color="primary"
        onClick={() => profileHandler('mix')}
      >
        Mix
      </Button>
      <SliderList sliders={sliders} getValue={getValueSlider} />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Aggregation model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aggregation}
          label="Age"
          onChange={selectHandler}
        >
          <MenuItem value={'Naive average'}>Naive average</MenuItem>
          <MenuItem value={'Least misery'}>Least misery</MenuItem>
          <MenuItem value={'Maximum pleasure'}>Maximum pleasure</MenuItem>
          <MenuItem value={'Media satisfaction'}>Media satisfaction</MenuItem>
        </Select>
      </FormControl>
      <Button 
        variant="outlined"
        type="button"
        color="secondary"
        onClick={submitHandler}
      >
        Continuar
      </Button>
      {neighbors && <NeighborList NeighborArray={neighbors}/>}
    </Fragment>
  )
}

export default MainApp
