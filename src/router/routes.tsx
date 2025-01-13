import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import ExhibitionDetail from '../pages/ExhibitionDetail';
import Exhibitions from '../pages/Exhibitions';
import AiAnswer from '../pages/AiAnswer';
import AboutUs from '../pages/AboutUs';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/exhibitions/exhibition_detail',
    element: <ExhibitionDetail />,
  },
  {
    path: '/exhibitions',
    element: <Exhibitions />,
  },
  {
    path: '/question_to_ai',
    element: <AiAnswer />,
  },
  {
    path: '/about_us',
    element: <AboutUs />,
  },
];

export default routes;
