import {cosineSimilarityFunc} from './cosenus'; 

export const getKNeighbors = (parsedData:any, person: any, nameHeader:string[], entries:number, isCrossover = false) => {
  const testArray:any[] = []; 
  
  const dataToCompare = parsedData.filter((name:any) => name[nameHeader[0]]!==person[nameHeader[0]]);
  dataToCompare.forEach((p:any) => {
    const tie = cosineSimilarityFunc([person,p], nameHeader[0]);
    const name = isCrossover ? p[nameHeader[1]]: p[nameHeader[0]];
    testArray.push({tie, name});
  })
  return testArray.sort((a,b) => b.tie-a.tie).splice(0,entries)
  
}