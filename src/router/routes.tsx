import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import ExhibitionDetail from '../pages/ExhibitionDetail';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/exhibition_detail',
    element: <ExhibitionDetail />,
  },
];

export default routes;
