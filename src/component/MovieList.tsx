"use client";
import { useEffect, useState } from "react";
import { apiEndpoints } from "../api data/api";
import React from "react";

const MovieList = () => {
  const [movieData, setMoviesData] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      apiEndpoints.map(async (value) => {
        const response = await fetch(value.url);
        const data = await response.json();
        const { results } = data;
        setMoviesData(results);
      });
    }
    fetchMovie();
  }, []);

  return (
    <div className="flex flex-row gap-3.5 p-[20px] m-auto w-[1350px]">
      {movieData.map((movie, index) => {
        return (
          <div
            key={index}
            className="flex flex-col bg-white rounded-t-lg items-center content-center;"
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} image`}
                className="w-[250px] rounded-t-lg"
              />
            </div>
            <div className="flex flex-col  ">
              <div className="w-[250px] text-black font-bold p-[5px]">
                {movie.title}
              </div>
              <div className="w-[250px] text-black font-bold p-[5px]">
                {movie.release_date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
