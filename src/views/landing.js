import React, { useState } from 'react';
import { string } from 'prop-types';
import Mood from 'components/mood';

import { Button, Grid, CircularProgress } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';

import { useDataContext } from 'contexts/data-context';

const LandingView = ({ mood = '' }) => {
  const [viewMood, setViewMood] = useState(mood);
  const [viewLoading, setViewLoading] = useState();

  const { getMood } = useDataContext();

  const fetchMood = async () => {
    try {
      setViewLoading(true);
      const apiMood = await getMood();
      setViewMood(apiMood);
    } catch (err) {
      console.log(err);
    } finally {
      setViewLoading(false);
    }
  };

  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      <Grid item xs={12}>
        <Mood mood={viewMood}/>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          color="secondary"
          aria-label="update mood"
          onClick={fetchMood}
          disabled={viewLoading}
          size="large"
          endIcon={viewLoading
            ? <CircularProgress />
            : (
              <UpdateIcon />
            )
          }
          >
         Update mood
       </Button>
      </Grid>
    </Grid>
  );
};

LandingView.propTypes = {
  mood: string,
};

export default LandingView;
