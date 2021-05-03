import { lazy } from 'react';

const Dashboard = lazy(() =>
  import('./components/screens/Dashboard/Dashboard'),
);
const Detail = lazy(() =>
  import('./components/screens/Detail/Detail'),
);

const routes = [
  {
    title: 'Dashboard',
    path: '/',
    exact: true,
    protected: false,
    component: Dashboard,
  },
  {
    title: 'Detail',
    path: '/detail',
    component: Detail,
    exact: true,
    protected: true,
  },
];

export default routes;
