import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import WorkDetail from './WorkDetail';
import NotFound from './NotFound';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    WorkDetail,
    NotFound
  ]
});

export default createRoutes;
