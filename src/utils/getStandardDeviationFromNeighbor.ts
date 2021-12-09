import {std} from 'mathjs'; 
export const getStandardDeviationFromNeighbor = (currentData: any, nameHeader: string) => {
  const newV = currentData.map((v:any) => {
    const { [nameHeader]: name, ...rest} = v;
    return rest; 
  })

  const objArray = newV.reduce((acc:any, val:any) => {
    for(const key in val){
      if(!acc[key]){
        acc[key] = []
      }
      acc[key].push(parseInt(val[key]))
    }
    return acc
  }, {}); 
  for(const key in objArray){
    objArray[key] = std(objArray[key])
  }
  return objArray; 
}