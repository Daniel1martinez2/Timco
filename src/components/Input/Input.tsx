import React, {useState} from 'react'; 
import { TextField } from '@material-ui/core';

interface InputProps {
  type: 'text' | 'number'; 
  getValue: (value: string) => void; 
  value: string
}

const Input: React.FC<InputProps> = ({type, getValue, value}) => {
  
  const inputHandler: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    if(type !== 'number') {
      getValue(e.target.value)
      return; 
    }
    if(/^\d+$/.test(e.target.value) || e.target.value === '') {
      getValue(e.target.value);
    }; 
  }
  return (
    <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      value={value}
      onChange={inputHandler}
    />
  )
}

export default Input
