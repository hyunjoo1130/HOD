import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import ExhibitionDetail from '../pages/ExhibitionDetail';
import Exhibitions from '../pages/Exhibitions';
import AboutUs from '../pages/AboutUs';
import AiSearch from '../pages/AiSearch';
import Brands from '../pages/Brands';
import BrandDetail from '../pages/BrandDetail';
import News from '../pages/News';

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
    path: '/ai_search',
    element: <AiSearch />,
  },
  {
    path: '/about_us',
    element: <AboutUs />,
  },
  {
    path: '/brands',
    element: <Brands />,
  },
  {
    path: '/brands/brand_detail',
    element: <BrandDetail />,
  },
  {
    path: '/news',
    element: <News />,
  },
];

export default routes;
