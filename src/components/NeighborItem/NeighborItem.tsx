import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

interface NeighborItemProps {
  name: string;
  value: number;
}

const NeighborItem: React.FC<NeighborItemProps> = ({name, value}) => {

  return (
    <ListItem
      secondaryAction={<h2>{value}%</h2>}
      divider
    >
      <ListItemAvatar>
        <Avatar
          alt={`Avatar n°`}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dmrkNiYJX4oH586rKzZebgHaHa%26pid%3DApi&f=1"
        />
      </ListItemAvatar>
      <ListItemText primary={<h2>{name}</h2>} secondary={<span>Number: 23132423</span>} />
    </ListItem>
  );
}

export default NeighborItem; 