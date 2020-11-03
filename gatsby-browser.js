import React from 'react';

import { DataProvider } from 'contexts/data-context';

export const wrapRootElement = ({ element }) => (
    <DataProvider>{element}</DataProvider>
);
