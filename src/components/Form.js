import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZlM2Q4ZjhmYjk2ZmE3YmQ0NGNkYjJmODVmYjVmMCIsInN1YiI6IjY1MjAxMDA1ZWE4NGM3MDE0ZWZmNDdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSNWY9VbhagOQdXNbuzk9POZ73RB5KILr1gRGf1p4cI';
const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
   const [search, setSearch] = useState("code");
   const [sortGoodBad, setSortGoodBad] = useState(null);
    useEffect(() => {
        axios
        .get(
          `https://api.themoviedb.org/3/search/movie?
        api_key=166e3d8f8fb96fa7bd44cdb2f85fb5f0&query=${search}&language=fr-FR`, config
        )
        .then((res) => setMoviesData(res.data.results));
    }, [search]);
    return (
        <div className='form-component'>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top<span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop<span>➜</span>
          </div>
        </div>
      </div>
        <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} poster={movie.poster_path} />
          ))}
      </div>
        
        </div>
    );
};

export default Form;