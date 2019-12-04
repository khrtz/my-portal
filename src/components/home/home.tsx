import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import { Links } from '../links';
import { Container, Chip, Avatar, Link } from '@material-ui/core';
import { CodeRounded } from '@material-ui/icons';
import bugsnag from '@bugsnag/js'
const bugsnagClient = bugsnag('838f71e7f76b1d276553efc5f096933f')

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
});

function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="initial">
            khrtz
          </Typography>
          <Link
            href="https://github.com/khrtz/my-portal"
          >
            <Chip
              color="primary"
              avatar={
                <Avatar>
                  <CodeRounded />
                </Avatar>
              }
            label="This Site Code"
            variant="default"
            clickable
          />
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export const Home = ({
}) => {
  bugsnagClient.notify(new Error('Test error'));
  return (
    <React.StrictMode>
      <SimpleAppBar />
      <Container>
        <Links />
      </Container>
    </React.StrictMode>
  );
}