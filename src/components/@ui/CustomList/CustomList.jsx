import * as React from 'react';
import PropTypes from 'prop-types';

// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

const ListItemLevel = ({ level }) => {
  if (level) {
    const length = new Array(level).fill(".");
    return (
      <Grid
        container
        gap={2}
        justifyContent="center"
      >
        {length.map((separator, i) => (
          <Typography key={i} variant="body2" sx={{ lineHeight: '14px' }}>{separator}</Typography>
        ))}
      </Grid>
    )
  }

  return null;
}

ListItemLevel.propTypes = {
  level: PropTypes.number,
};

ListItemLevel.defaultProps = {
  level: null,
};

const ListItem = ({
  title,
  chip,
  level,
  onClick,
  open,
  id,
}) => {
  // console.log({ id });
  return (
    <ListItemButton onClick={onClick}>
      <ListItemText primary={
        <Grid
          container
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Grid container spacing={2} wrap='nowrap'>
              {level ? (
                <Grid item>
                  <ListItemLevel level={level} />
                </Grid>
              ) : null}
              <Grid item>
                <Typography variant="body2">{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {chip ? (
            <Grid item>
              <Chip label={chip} size="small" />
            </Grid>
          ) : null}
        </Grid>
      } />
      {!level ? (open ? <ExpandLess /> : <ExpandMore />) : null}
    </ListItemButton>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  chip: PropTypes.any,
  level: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.any,
  open: PropTypes.bool,
};

ListItem.defaultProps = {
  chip: null,
  level: null,
  onClick: () => { },
  open: false,
};

const RecursiveList = ({ items, level }) => {
  const [openItems, setOpenItems] = React.useState([]);

  const handleClick = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <List sx={{ width: '100%' }} component="nav">
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            chip={item.quantity}
            onClick={() => handleClick(item.id)}
            title={item.title}
            open={openItems.includes(item.id)}
            id={item.id}
            level={level}
          />
          {item.items && item.items.length ? (
            <Collapse in={openItems.includes(item.id)} timeout="auto" unmountOnExit>
              <RecursiveList items={item.items} level={level + 1} />
            </Collapse>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  );
};

const CustomList = ({ schema }) => {
  console.log({ schema });
  return <RecursiveList items={schema.items} level={0} />;
};

CustomList.propTypes = {
  schema: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    })),
  }),
};

export default CustomList;