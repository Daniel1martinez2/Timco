import React from 'react'; 
import {SliderType} from '../../types/SliderType'; 
import { Container } from '@material-ui/core';
import SliderContainer from '../SliderContainer/SliderContainer'; 

interface SliderListProps {
  sliders: SliderType;
  getValue: (value: SliderType) => void
}

const SliderList: React.FC<SliderListProps> = ({sliders, getValue}) => {

  const onChange = (id: string, newData: number | number[]) =>{
    const copy = [...sliders]; 
    const current = copy.findIndex(e => e.id === id); 
    if(current === -1) return
    copy[current].value = newData; 
    getValue(copy); 
  }
  return (
    <Container>
      {sliders.map( slider => (
        <SliderContainer 
          key={slider.id}
          title={slider.title} 
          value={slider.value} 
          onChange={(e, values) => onChange(slider.id, values ) }/>
      ))}
    </Container>
  )
}

export default SliderList
