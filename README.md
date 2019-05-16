# Birdie developer test.
We would like to thank you for taking our developer test. We understand that often candidates will have many of these tests to complete. Therefore we think it's important to cut straight to important stuff. With that in mind we have gone ahead and created a boiler plate that mostly represents the kind of technical stack we work with. This saves you the time of having to create needless boiler plate code does little to demonstrate your potential as a developer.

## Set up

Here's the technical stack this boiler plate is made from.

### Front end
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/introduction/getting-started)
* [TypeScript](https://www.typescriptlang.org/)
* [Redux sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
* [Styled components](https://www.styled-components.com/)

### Back end
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [TypeScript](https://www.typescriptlang.org/)

## Challenge
At Birdie our app allows care givers to record observations on older adults (we name them care recipients) receiving care.
These could be anything from the recording of mood (happy, sad, bored, confused) to what they drank today (1 pint of water). 
Each of these observations are recorded as events in our database. Here's an example of a mood observation recorded
in this event format:

```
{  
   "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
   "mood":"okay",
   "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
   "timestamp":"2019-04-23T10:53:13+01:00",
   "event_type":"mood_observation",
   "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
   "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c"
},
```

Here's a quick explanation of some of the properties:

- `id`: Uniquely identifies the observation  
- `visit_id`: Observations are traditionally observed during a visit between the caregiver (carer) and care recipient. This ID identifies that visit  
- `event_type`: Title we use to categorise our events.  
- `caregiver_id`: Identifies who the caregiver (carer) was that made this observation.
- `care_recipient_id`: Identifies the care recipient this observation is for.

The database (we should have sent you credentials) contains some of these observation events, within the `events` table.

Your challenge is to **display these observations** (i.e. as a table, graph, timeline or any other way/combinaison you feel like) **so that looking at it is valuable to a user** (pick one from the older adult, a family member, a care professional, etc).

## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the HTTP server (will start on port `8000`)
   ```
   npm run dev
   ```
2. Start the React app  (Run the following commands within the front-end folder)

    a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the application (will start on port `3000`)
   ```
   npm start
   ```
