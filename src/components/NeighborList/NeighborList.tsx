import List from '@mui/material/List';
import { NeighborType } from '../../types/NeighborType';
import NeighborItem from '../NeighborItem/NeighborItem';

interface NeighborListProps {
  NeighborArray: NeighborType[]
}
const NeighborList: React.FC<NeighborListProps> = ({NeighborArray}) => {
  return (
    <List  dense sx={{ width: '100%', bgcolor: 'white', borderRadius :"8px", display:"flex", flexDirection: "column", gap:"1em"}}>
      {NeighborArray.map((Neighbor, index) => {
        return <NeighborItem key={index} name={Neighbor.name} value={Neighbor.value}/>
      })}
    </List>
  );
}

export default NeighborList; 