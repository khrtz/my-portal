import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
      >
        <Avatar
          alt="へるつのアイコン"
          src="../../../assets/images/my-avatar.png"
          className={classes.avatar}
        />
        <Typography variant="subtitle1" color="inherit">
          Ito Kohei / Software Engineer
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Profile;