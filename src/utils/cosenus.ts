import {dotProduct} from './dotProduct';
import { getMagnitude } from './magnitude';
import {checkAngle, fixedSim} from './checkAngle';

interface getSimilarityInterface {
  dot: any
  magnitudeA: any 
  magnitudeB: any
}

export const getSimilarity: (data: getSimilarityInterface) => any = ({dot, magnitudeA, magnitudeB}) => {
  const similarity = dot / (magnitudeA* magnitudeB);
  return (magnitudeA === 0 || magnitudeB === 0) ? 0 : similarity; 
}

export const cosineSimilarityFunc = (dataArray: any, firstColumnName: any) => {
  const currentDotProduct = dotProduct(dataArray, firstColumnName); 
  const magnitudeA = getMagnitude(dataArray[0]);
  const magnitudeB = getMagnitude(dataArray[1]); 
  if(checkAngle(dataArray)){
    return fixedSim(dataArray)* 100; 
  }else{
    return getSimilarity({dot: currentDotProduct,magnitudeA, magnitudeB })* 100; 
  }
}