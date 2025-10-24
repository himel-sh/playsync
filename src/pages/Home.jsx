import React, { Suspense } from "react";
import Banner from "../components/home/Banner";
import PopularGames from "../components/home/PopularGames";
import NewsLetter from "../components/home/NewsLetter";
import { FourSquare } from "react-loading-indicators";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="pb-10">
      <Suspense
        fallback={
          <FourSquare color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
        }
      >
        <Banner></Banner>
      </Suspense>
      <div className="grid md:grid-cols-3 gap-6  my-10">
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
      <Link
        to="/games"
        className="block text-center py-3 px-6 mt-8 mx-auto w-max text-xl font-bold text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      >
        More Games
      </Link>
    </div>
  );
};

export default Home;
