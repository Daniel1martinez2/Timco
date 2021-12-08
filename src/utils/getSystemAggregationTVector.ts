import { getStandardDeviationFromNeighbor } from "./getStandardDeviationFromNeighbor";

export const getSystemAggregationTVector = (system:string, tVector:any, neighborsVector:any, nameHeader: string) => {
  const newVector:any = {};

  switch (system) {
    case 'Naive average':
      return tVector
    case 'Least misery':
      for(const key in tVector){
        newVector[key] = tVector[key] < 5 ? 0 : tVector[key]
      }
      return newVector
    case 'Maximum pleasure':
        for(const key in tVector){
          newVector[key] = tVector[key] >= 8 ? tVector[key]: 0; 
        }
        return newVector
    case 'Media satisfaction':
      const standardVector = getStandardDeviationFromNeighbor(neighborsVector, nameHeader); 
      // console.table(standardVector);
      for(const key in standardVector){
        if(standardVector[key] > 1){
          newVector[key] = 0; 
        }else{
          newVector[key] = tVector[key]; 
        }
      }
      return newVector
    default: 
      return tVector; 
  }
}