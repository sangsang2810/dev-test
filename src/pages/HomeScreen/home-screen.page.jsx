import React from "react";
import { HomeScreenData } from "../../utils/data";
import {
  BannerComponent,
  CarTypeComponent,
  FooterComponent,
  HeaderComponent,
  LatestNewsComponent,
  NewCarComponent,
  PopularBrandComponent,
  UsedCarComponent,
} from "./components";

function HomeScreenPage() {
  const { brands, carType, usedCars, newCars, latestNews } = HomeScreenData;
  return (
    <div>
      <div>
        <HeaderComponent />

        <div className="px-4 space-y-4">
          <BannerComponent />
          <PopularBrandComponent brands={brands} />
          <CarTypeComponent carType={carType} />
          <UsedCarComponent usedCars={usedCars} />
          <NewCarComponent newCars={newCars} />
          <LatestNewsComponent latestNews={latestNews} />
        </div>

        <FooterComponent />
      </div>
    </div>
  );
}

export default HomeScreenPage;
