import React from "react";
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  PopularBrandComponent,
} from "./components";

function HomeScreenPage() {
  return (
    <div>
      <div>
        <HeaderComponent />

        <div class="h-screen">
          <BannerComponent />
          <h1 class="text-4xl text-center ">Content</h1>
          <PopularBrandComponent />
        </div>

        <FooterComponent />
      </div>
    </div>
  );
}

export default HomeScreenPage;
