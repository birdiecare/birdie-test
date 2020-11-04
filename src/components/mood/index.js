import React from 'react';
import { string } from 'prop-types';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import HotelIcon from '@material-ui/icons/Hotel';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const Mood = ({ mood = '' }) => {
  if (mood === 'sad') {
    return <SentimentVeryDissatisfiedIcon color="error" style={{ fontSize: 200 }}/>;
  }

  if (mood === 'tired') {
    return <HotelIcon color="primary" fontSize="large" style={{ fontSize: 200 }}/>;
  }

  if (mood === 'confused') {
    return <TransferWithinAStationIcon color="action" style={{ fontSize: 200 }}/>;
  }

  if (mood === 'hungry') {
    return <FastfoodIcon color="secondary" style={{ fontSize: 200 }}/>;
  }

  return <SentimentVerySatisfiedIcon color="primary" style={{ fontSize: 200 }}/>;
};

Mood.propTypes = {
  mood: string.isRequired,
};

export default Mood;
