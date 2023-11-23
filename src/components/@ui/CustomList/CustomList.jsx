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

const schema = {
  skis: {
    title: 'Горные лыжи и сноуборд',
    id: 'skis',
    items: [
      {
        id: 'standart',
        title: 'Стандартные тарифы',
        quantity: 12,
        items: [
          {
            title: 'Индивидуальное занятие',
            id: 'individual',
            items: [
              {
                id: '1hour',
                title: '1 час',
              },
              {
                id: '2hours',
                title: '2 часа',
              },
            ],
          },
          {
            title: 'Два человека/Парное занятие',
            id: 'twoperson',
            items: [
              {
                id: '1hour',
                title: '1 час',
              },
              {
                id: '2hours',
                title: '2 часа',
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function CustomList({ }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { skis } = schema;

  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {skis.items.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            chip={12}
            onClick={handleClick}
            title={item.title}
            open={open}
            id={item.id}
          />
          {item.items && item.items.length ? (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.items.map((subitem) => (
                  <React.Fragment key={subitem.id}>
                    <ListItem title={subitem.title} level={1} id={subitem.id} />
                    {subitem.items && subitem.items.length ? (
                      subitem.items.map((subsubitem) => (
                        <ListItem title={subsubitem.title} level={2} id={subsubitem.id} key={subsubitem.id}/>
                      ))
                    ) : null}
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  );
}
