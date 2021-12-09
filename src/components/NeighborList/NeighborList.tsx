import List from '@mui/material/List';
import { NeighborType } from '../../types/NeighborType';
import NeighborItem from '../NeighborItem/NeighborItem';
import classes from './NeighborList.module.css'; 

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
    <div
      className={classes.container}
    >
      <List  dense sx={{ width: '100%', bgcolor: 'transparent', borderRadius :"8px", display:"flex", flexDirection: "column", gap:"1em"}}>
        {NeighborArray.map((neighbor, index) => {
          return <NeighborItem data={getNeighborData(data, neighbor.name, header)} key={index} name={neighbor.name} value={neighbor.tie}/>
        })}
      </List>
    </div>
  );
}

export default NeighborList; 