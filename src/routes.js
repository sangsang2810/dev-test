import CarBrandPage from './pages/CarBrand/car-brand.page';
import { BrandDetailComponent, BrandListComponent } from './pages/CarBrand/components';
import LandingPage from './pages/LandingPage/landing.page';

const routes = [
  {
    path: '/car-brand-list',
    exact: true,
    public: true,
    element: <CarBrandPage />,
    children: [
      { index: true, element: <BrandListComponent /> },
      { path: ":carBranId", element: <BrandDetailComponent /> },
    ]
  },
  {
    path: '/landing-page',
    exact: true,
    public: true,
    element: <LandingPage />,
  },

];
export default routes;