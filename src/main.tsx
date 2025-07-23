import Header from "./components/header";
import SearchBox from "./components/searchbox";
import WeatherCard from "./weathercard";
import RecentSearches from "./components/recentsearches";
import FavoriteCities from "./components/favoritycities";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-[#65B2FB] via-[#2C95EC] to-[#188BE7]  text-black p-4 ">
      <div className="max-w-[1200px] mx-auto space-y-6 ">
        <Header />
        <SearchBox />
        <div className="flex gap-x-[25px]">
          <div className="">
            <WeatherCard />
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <RecentSearches />
            <FavoriteCities />
          </div>
        </div>
      </div>
    </div>
  </StrictMode>
);
