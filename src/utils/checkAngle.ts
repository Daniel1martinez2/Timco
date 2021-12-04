import {getMagnitude} from './magnitude'; 
const ridOfHeader = (item: any) => {
  return Object.values(item).splice(1);
}
export const checkAngle = ([rowA, rowB]: any[]) => {
  const rowAConverted: any = ridOfHeader(rowA);
  const rowBConverted: any = ridOfHeader(rowB);
  const rowAMax = Math.max(...rowAConverted); 
  const rowBMax = Math.max(...rowBConverted); 
  const rowANormalized = rowAConverted.map((item: any) => item / rowAMax); 
  const rowBNormalized = rowBConverted.map((item: any) => item / rowBMax); 
  let final = 0; 
  rowANormalized.forEach((item: any, i: any) => {
    final =+ (item - rowBNormalized[i]); 
  });   
  return final === 0? true : false;
}; 
export const fixedSim = ([rowA, rowB]: any[]) => {
  const a = getMagnitude(rowA); 
  const b = getMagnitude(rowB); 
  return a === b ? 1 : (Math.abs(a - b) / Math.max(a, b)); 
}