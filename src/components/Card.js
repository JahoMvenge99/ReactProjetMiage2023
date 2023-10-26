import React from 'react';

const Card = ({ movie }) => {
    return (
        <div className="card">
            {movie && movie.poster_path ? (
                <img
                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                    alt={`Poster of ${movie.title}`}
                    
                />
            ) : (
                <div>
                    <img
                        src="./img/poster.jpg"
                        alt="Post not available"
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
