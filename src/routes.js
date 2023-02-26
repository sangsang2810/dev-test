import CarBrandPage from './pages/CarBrand/car-brand.page';
import { AddBrandComponent, BrandDetailComponent, BrandListComponent } from './pages/CarBrand/components';
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
      { path: "/car-brand-list/add-car-brand", element: <AddBrandComponent /> },
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