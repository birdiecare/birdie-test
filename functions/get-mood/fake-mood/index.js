const { v1 } = require('uuid');
const { DateTime } = require('luxon');

module.exports.getMood = (logger) => {
  const mood = Math.floor(Math.random() * 5) + 1;
  const id = v1();
  const visit_id = v1();
  const timestamp = DateTime.utc().toISO();
  const caregiver_id = v1();
  const care_recipient_id = v1();

  const baseRecord = {
    id,
    event_type: 'mood_observation',
    visit_id,
    timestamp,
    caregiver_id,
    care_recipient_id,
  };

  switch (mood) {
    case 1:
      return Promise.resolve({
        ...baseRecord,
        mood: 'sad',
      });
    case 2:
      return Promise.resolve({
        ...baseRecord,
        mood: 'tired',
      });
    case 3:
      return Promise.resolve({
        ...baseRecord,
        mood: 'confused',
      });
    case 4:
      return Promise.resolve({
        ...baseRecord,
        mood: 'hungry',
      });
    default:
      return Promise.resolve({
        ...baseRecord,
        mood: 'happy',
      });
  }
};
