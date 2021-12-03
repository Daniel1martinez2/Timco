import React from 'react'; 
import { Slider } from '@material-ui/core'; 

interface SliderContainerProps {
  name: string,
  value: number | number[],
  onChange: ((event: React.ChangeEvent<{}>, value: number | number[]) => void) | undefined
}

const SliderContainer: React.FC<SliderContainerProps> = ({name, value, onChange}) => {
  return (
    <div>
      <span>{name}</span>
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
