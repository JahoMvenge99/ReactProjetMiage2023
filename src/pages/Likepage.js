import { default as React } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";


const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {

      fetch(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=166e3d8f8fb96fa7bd44cdb2f85fb5f0&language=fr-FR`).then((response) => {
        response.json().then((data) => {
          setListData((listData) => [...listData, data]);
        });
    });
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export { LikePage };
