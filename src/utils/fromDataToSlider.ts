export const fromDataToSlider = (data:string[], nameHeader:string) => {
  return data.filter(d => d !== nameHeader ).map( n => ({
    id: n.split(' ').join(''),
    value: 100, 
    title: n
  }))
}