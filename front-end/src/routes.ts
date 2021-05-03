import { lazy } from 'react';
import NotFound from './components/screens/NotFound';
const Dashboard = lazy(() => import('./components/screens/Dashboard/Dashboard'));
const Detail = lazy(() => import('./components/screens/Detail/Detail'));

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
    protected: false,
  },
  {
    title: 'Not Found',
    path: '*',
    component: NotFound,
    protected: false,
  },
];

export default routes;
