//
import Alert from './Alert';
import Container from './Container';
import Paper from './Paper';
import TextField from './TextField';
import Button from './Button';
import Dialog from './Dialog';
import Chip from './Chip';
import List from './List';
import IconButton from './IconButton';
import Typography from './Typography';
import Skeleton from './Skeleton';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Alert(theme),
    Container(theme),
    Paper(theme),
    TextField(theme),
    Button(theme),
    Dialog(theme),
    IconButton(theme),
    Chip(theme),
    List(theme),
    Typography(theme),
    Skeleton(theme),
  );
};
