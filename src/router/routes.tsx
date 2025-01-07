import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import ExhibitionDetail from '../pages/ExhibitionDetail';
import Exhibitions from '../pages/Exhibitions';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/exhibition_detail',
    element: <ExhibitionDetail />,
  },
  {
    path: '/exhibitions',
    element: <Exhibitions />,
  },
];

export default routes;
