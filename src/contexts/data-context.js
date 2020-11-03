import React, { createContext, useContext } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import axios from 'axios';

import { BASE_APPLICATION } from 'gatsby-env-variables';

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext) || {};

export const DataProvider = ({ children }) => (
          <DataContext.Provider
            value={{
              getMood: async () => {
                const { data } = await axios({
                  method: 'get',
                  url: `${BASE_APPLICATION}/get-mood`,
                  headers: { 'Content-Type': 'application/json' },
                });
                const { mood: { mood } } = data;
                return mood;
              },
            }}>
            {children}
          </DataContext.Provider>
);

DataProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
