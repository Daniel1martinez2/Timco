import React from 'react'; 
import { Slider } from '@material-ui/core'; 

interface SliderContainerProps {
  title: string,
  value: number | number[],
  onChange: ((event: React.ChangeEvent<{}>, value: number | number[]) => void) | undefined
}

const SliderContainer: React.FC<SliderContainerProps> = ({title, value, onChange}) => {
  return (
    <div>
      <span>{title}</span>
      <Slider 
        value={value} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        onChange={onChange}
        />
    </div>
  )
}

export default SliderContainer
