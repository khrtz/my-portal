import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Card, CardContent, CardActions, Button, Link, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginTop: '20px',
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  detail: {
    minHeight: '50px'
  }
});

export function Jobs() {
  const classes = useStyles();

  return (
    <Box width="100%">
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            2015.9 ~ 2016.10
          </Typography>
          <Typography variant="h6" component="h2">
            READYFOR, Inc.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Software Engineer
          </Typography>
          <Typography className={classes.detail} variant="body2" component="p">
            Ruby on Rails, React, Redux, UI Design
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="https://abema.tv/">
            <Button size="small">Link</Button>
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            2016.11 ~
          </Typography>
          <Typography variant="h6" component="h2">
            AbemaTV, Inc.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Software Engineer
          </Typography>
          <Typography variant="body2" component="p">
            Single Page Application, JavaScript, TypeScript, RxJS, New Device Engineer Chromecast Receiver, TV App
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="https://readyfor.jp/">
            <Button size="small">Link</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
    </Box>
  );
}
