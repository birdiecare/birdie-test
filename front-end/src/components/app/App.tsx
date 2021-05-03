import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallBack from '../common/ErrorFallBack/ErrorFallBack';
import { Loader } from '../common/Loaders/Loaders';

import routes from '@App/routes';

const App = () => {
  return (
    <Router>
      {/* @ts-ignore */}
      <ErrorBoundary FallbackComponent={<ErrorFallBack />}>
        <React.Suspense fallback={<Loader fullscreen={true} />}>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </React.Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;