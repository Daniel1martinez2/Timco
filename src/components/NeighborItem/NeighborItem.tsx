import React, {Fragment, useState} from 'react'; 
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import ModalScreen from '../ModalScreen/ModalScreen';
import ModalNeighbor from '../ModalNeighbor/ModalNeighbor';

interface NeighborItemProps {
  name: string;
  value: number;
  data: any
}

const ListItemContainer = styled(ListItem)({
  h3:{
    color: '#A6A6A6'
  },
  color: '#122930'
});

const NeighborItem: React.FC<NeighborItemProps> = ({name, value, data}) => {
  const [showModal, setShowModal] = useState(false); 
  return (
    <Fragment>
      {showModal && <ModalScreen setShowModal={setShowModal}>
        <ModalNeighbor data={data} name={name}/>
      </ModalScreen>}
      
      <ListItemContainer
        secondaryAction={<h3>{value.toFixed(1)}%</h3>}
        // divider
        disablePadding
      >
        <ListItemButton onClick={() => setShowModal(true)}>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°`}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dmrkNiYJX4oH586rKzZebgHaHa%26pid%3DApi&f=1"
            />
          </ListItemAvatar>
          <ListItemText primary={<h2>{name}</h2>} secondary={<span>Number: 23132423</span>} />
        </ListItemButton>
      </ListItemContainer>
    </Fragment>
  );
}

export default NeighborItem; 

/**
 * 
 * <ListItem
    key={value}
    secondaryAction={
      <h1>s</h1>
    }
    disablePadding
  >
    <ListItemButton>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar n°${value + 1}`}
          src={`/static/images/avatar/${value + 1}.jpg`}
        />
      </ListItemAvatar>
      <ListItemText id={'s'} primary={`Line item ${value + 1}`} />
    </ListItemButton>
  </ListItem>
 */