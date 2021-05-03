import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from '@App/store';
import { Provider } from 'react-redux';
import App from '@App/components/app/App';

ReactDOM.render(
  <React.Fragment>
    {/* @ts-ignore */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
