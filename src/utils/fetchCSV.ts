export async function fetchCSV(DATA:any) {
  const response:any = await fetch(DATA, {
      headers: {
        'content-type': 'text/csv;charset=UTF-8'
      }
    })
    .catch(function () {
    });
  const data = await response.text();
  return data;
};

