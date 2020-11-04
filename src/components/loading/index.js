import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 60px)',
    left: 'calc(50% - 60px)',
  },
});

const Loading = () => {
  const styles = useStyles();

  return <CircularProgress className={styles.circularProgress} size={100} color="secondary" />;
};

export default Loading;
