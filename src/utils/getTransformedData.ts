export const getTransformedData = (currentData:any, rangeValues:any, nameHeader:  any) => {
  return currentData.map( (dValue:any) => {
    const  weightSystem:any = {};
    let index = 0;
    for (const key in dValue){
      if(key !== nameHeader){
        weightSystem[key] = (parseInt(dValue[key])*rangeValues[index]).toString();
        index ++;
      }else{
        weightSystem[key] = dValue[key];
      }
    }
    return weightSystem
  })
}