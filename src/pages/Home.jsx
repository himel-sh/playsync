import React, { Suspense } from "react";
import Banner from "../components/home/Banner";
import PopularGames from "../components/home/PopularGames";
import NewsLetter from "../components/home/NewsLetter";
import { FourSquare } from "react-loading-indicators";

const Home = () => {
  return (
    <div>
      <Suspense
        fallback={
          <FourSquare color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
        }
      >
        <Banner></Banner>
      </Suspense>
      <div className="grid md:grid-cols-3 gap-3  my-10">
        <div className="col-span-2 ">
          <Suspense
            fallback={
              <FourSquare
                color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
              />
            }
          >
            <PopularGames />
          </Suspense>
        </div>
        <div className="col-span-1 ">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
