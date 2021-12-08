import List from '@mui/material/List';
import { NeighborType } from '../../types/NeighborType';
import NeighborItem from '../NeighborItem/NeighborItem';
import classes from './NeighborList.module.css'; 
import {motion} from 'framer-motion'; 

interface NeighborListProps {
  NeighborArray: NeighborType[]
}

const NeighborList: React.FC<NeighborListProps> = ({NeighborArray}) => {
  return (
    <div
      className={classes.container}
    >
      <List  dense sx={{ width: '100%', bgcolor: 'transparent', borderRadius :"8px", display:"flex", flexDirection: "column", gap:"1em"}}>
        {NeighborArray.map((Neighbor, index) => {
          return <NeighborItem key={index} name={Neighbor.name} value={Neighbor.tie}/>
        })}
      </List>
      
    </div>
  );
}

export default NeighborList; 