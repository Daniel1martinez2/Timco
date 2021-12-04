export const getMagnitude = (current:number) => {
  const total = Object.values(current).splice(1);
  const reducer = (previousValue:number, currentValue:number) => previousValue + Math.pow(currentValue, 2);
  const reducedValue:number = total.reduce(reducer, 0);
  return Math.sqrt(reducedValue);
}