import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Profile from '../profile/profile';
import Link from '@material-ui/core/Link';

interface Props {
}

const useStyles = makeStyles({
  link: {
    margin: 5
  }
});

export const Links: React.SFC<Props> = ({
}) => {
  const classes = useStyles();

  return (
    <div>
      <Profile />
      <Typography color={'secondary'} variant={'subtitle1'}>
        <Link href="https://blog.khrtz.xyz" className={classes.link}>Blog</Link>
        <Link href="https://github.com/khrtz" className={classes.link}>GitHub</Link>
        <Link href="https://twitter.com/khrtz" className={classes.link}>Twitter</Link>
      </Typography>
    </div>
  );
};

// export const LinksPage = withStyles(styles)(_LinksPage);