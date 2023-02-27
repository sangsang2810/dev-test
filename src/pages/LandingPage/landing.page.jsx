import React from "react";
import { LandingPageData } from "../../utils/data";
import {
  BannerComponent,
  CarsComponent,
  FooterComponent,
  HeaderComponent,
  IntroduceComponent,
  OurFeatureVehicle,
  OurProductComponent,
  QuestionComponent,
} from "./components";

function LandingPage() {
  const { contact, cars, vehicles, introduce, ourProduct } = LandingPageData;
  return (
    <div className="flex-1 space-y-10">
      <BannerComponent />
      <CarsComponent cars={cars} />
      <OurProductComponent ourProduct={ourProduct} />
      <OurFeatureVehicle vehicles={vehicles} />
      <QuestionComponent />
      <IntroduceComponent introduce={introduce} />
      <FooterComponent contact={contact} />
    </div>
  );
}

export default LandingPage;
