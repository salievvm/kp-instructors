import * as React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CustomBreadcrumb = ({
  label,
  href,
}) => {
  return (
    <Link
      underline="hover"
      color="inherit"
      href={href}
    // onClick={handleClick}
    >
      {label}
    </Link>
  );
};

const shape = {
  href: PropTypes.string,
  label: PropTypes.string,
};

CustomBreadcrumb.propTypes = shape;

export default function CustomBreadcrumbs({
  links,
}) {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="―" aria-label="breadcrumb">
        {links.map(({ href, label }, i) => {
          return (i !== links.length - 1 ?
            <CustomBreadcrumb
              key={i}
              href={href}
              label={label}
            />
            : <Typography color="text.primary">
              {label}
            </Typography>)
        })}
      </Breadcrumbs>
    </Stack>
  );
};

CustomBreadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(shape)),
};