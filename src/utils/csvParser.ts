//Transform the csv data to an array of js objects
export const csvParser = async (data: any) => {
  //1. split de data by break lines and commas in a single movement
  //-> Expected result: [val1, val2, val3... ]
  const transformed = data.split(/\r?\n/).map((data:any) => data.split(','));
  //Get the headers
  const headers = transformed[0];
  //2. rid of the headers
  transformed.splice(0, 1);
  //3. Design the array elem according to the headers
  const obj_data = transformed.map((data:any) => {
    const current:any = {};
    headers.forEach((i:any, index:number) => current[i] = data[index])
    return current;
  })
  // return obj_data;
  return {parsedData: obj_data, headers: headers};
};