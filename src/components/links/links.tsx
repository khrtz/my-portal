import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Profile from '../profile/profile';
import Link from '@material-ui/core/Link';
import { Chip, Avatar, Box } from '@material-ui/core';
import { CodeRounded } from '@material-ui/icons';

interface Props {
}

const useStyles = makeStyles({
  link: {
    margin: 5
  },
  repoLink: {
    marginLeft: '6px'
  }
});

export const Links: React.SFC<Props> = ({
}) => {
  const classes = useStyles();

  return (
    <div>
      <Profile />
      <Box display="flex" alignItems="center">
        <Typography color='secondary' variant={'subtitle1'}>
          <Link href="https://blog.khrtz.xyz" className={classes.link}>Blog</Link>
          <Link href="https://github.com/khrtz" className={classes.link}>GitHub</Link>
          <Link href="https://twitter.com/khrtz" className={classes.link}>Twitter</Link>
          <Link
            className={classes.repoLink}
            href="https://github.com/khrtz/my-portal"
          >
            <Chip
              color="secondary"
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
        </Typography>
      </Box>
    </div>
  );
};

// export const LinksPage = withStyles(styles)(_LinksPage);