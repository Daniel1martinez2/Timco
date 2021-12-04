import { SliderType } from "../types/SliderType";

export const createPersonFromSliders = (sliders:SliderType, nameHeader: string) => {
  const person:any = {}
  
  sliders.forEach( n => {
    if( typeof n.value === 'number'){
      person[n.title] = (n.value / 10)
    }
  })
  return {[nameHeader]: 'proto', ...person}; 
}