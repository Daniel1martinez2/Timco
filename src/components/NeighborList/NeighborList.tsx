import List from '@mui/material/List';
import { NeighborType } from '../../types/NeighborType';
import NeighborItem from '../NeighborItem/NeighborItem';


interface NeighborListProps {
  NeighborArray: NeighborType[]
  data: any
  header: string
}

const getNeighborData = (data: any, neighborName: string, header: string) =>{
  return data.find((d:any) => d[header] === neighborName); 
}

const NeighborList: React.FC<NeighborListProps> = ({NeighborArray, data, header}) => {
  
  return (
    <List >
      {NeighborArray.map((neighbor, index) => {
        return <NeighborItem 
          data={getNeighborData(data, neighbor.name, header)} 
          key={index} 
          name={neighbor.name} 
          value={neighbor.tie}
        />
      })}
    </List>
  );
}

export default NeighborList; 