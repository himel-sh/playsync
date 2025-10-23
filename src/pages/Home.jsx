import React from "react";
import Banner from "../components/home/Banner";
import PopularGames from "../components/home/PopularGames";
import NewsLetter from "../components/home/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-3  my-10">
        <div className="col-span-2 border-2">
          <PopularGames />
        </div>
        <div className="col-span-1 border-2">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
