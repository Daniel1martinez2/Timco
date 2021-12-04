export const getTemporalVector = (transformedData: any, nameHeader: any) => {
  const newV = transformedData.map((v:any) => {
    const { [nameHeader]: name, ...rest} = v;
    return rest; 
  })
  const { length } = newV;
  const vectorTest:any = {}; 
  newV.forEach((element:any, index:number) => {
    if(index !== 0) return 
    for (const key in element){
      vectorTest[key] = newV.reduce((acc:number, val:any) => {
        return acc + (val[key]/length);
      }, 0);
    }
  });
  for(const key in vectorTest){
    vectorTest[key] = Math.round(vectorTest[key])
  }
  return vectorTest;
}