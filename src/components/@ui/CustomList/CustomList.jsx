import * as React from 'react';
import PropTypes from 'prop-types';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

const ListItemLevel = ({ level }) => {
  if (level) {
    const length = new Array(level).fill(0);
    return (
      <Grid
        container
        gap={2}
        justifyContent="center"
      >
        {length.map((item) => (
          <Typography variant="body2" sx={{ lineHeight: '14px' }}>.</Typography>
        ))}
      </Grid>
    )
  }

  return null;
}

const ListItem = ({
  title,
  chip,
  level,
  onClick,
  open,
}) => {
  console.log({ open });
  return (
    <ListItemButton onClick={onClick}>
      <ListItemText primary={
        <Grid
          container
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Grid container spacing={2}>
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
  open: PropTypes.bool,
};

ListItem.defaultProps = {
  open: false,
};

export default function CustomList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem
        chip={12}
        onClick={handleClick}
        title={`Стандартные тарифы`}
        open={open}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem title={`Индивидуальное занятие`} level={1} />
          <ListItem title={`1 час`} level={2} />
          <ListItem title={`2 часа`} level={2} />
          <ListItem title={`Два человека/Парное занятие`} level={1} />
          <ListItem title={`1 час`} level={2} />
          <ListItem title={`2 часа`} level={2} />
        </List>
      </Collapse>
    </List>
  );
}
