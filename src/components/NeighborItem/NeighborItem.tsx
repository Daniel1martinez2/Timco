import React, {Fragment, useState, useEffect} from 'react'; 
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import ModalScreen from '../ModalScreen/ModalScreen';
import ModalNeighbor from '../ModalNeighbor/ModalNeighbor';
import defaultUserImg from '../../lib/img/user.png'; 

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
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState<number | null>(null);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(data => {
      console.log(data.results[0]);
      setImage(data.results[0].picture.large);
      setPhone(data.results[0].phone); 
    })
  }, [])
  
  return (
    <Fragment>
      {showModal && <ModalScreen setShowModal={setShowModal}>
        <ModalNeighbor 
          image={image || defaultUserImg} 
          data={data} 
          name={name}
        />
      </ModalScreen>}
      
      <ListItemContainer
        secondaryAction={<h3>{value.toFixed(1)}%</h3>}
        // divider
      >
        <ListItemButton onClick={() => setShowModal(true)}>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°`}
              src={image || ''}
            />
          </ListItemAvatar>
          <ListItemText primary={<h2>{name}</h2>} secondary={<span>Número: {phone || '3734765'}</span>} />
        </ListItemButton>
      </ListItemContainer>
    </Fragment>
  );
}

export default NeighborItem; 
