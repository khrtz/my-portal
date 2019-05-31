import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import { Links } from '../links';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="initial">
            khrtz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export const Home = ({
}) => {
  return (
    <React.StrictMode>
      <SimpleAppBar />
      <Container>
        <Links />
      </Container>
    </React.StrictMode>
  );
}