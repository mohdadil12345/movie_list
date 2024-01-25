import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import star from "../assets/start.svg";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchdata = async () => {
    let res = await fetch(`https://movie-lists-x2e8.onrender.com/movie/${id}`, {
      method: "GET",
    });

    let data = await res.json();
    setLoading(false);
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>...Loading</h1>
        </div>
      ) : (
        <div className="movie-container">
          <div className="movie-box">
            <div className="poster">
              <img src={movie.image} alt="" />
            </div>
            <div className="mov-details">
              <h1>{movie.title}</h1>
              <div className="btndiv">
              <button className="button2">
                <img src= "/assets/start.svg" alt="" />
              </button>
              <button className="button2">
                <img src="/assets/eye.png" alt="" />
              </button>
              <button className="button2">
                <img src="/assets/bookmark.png" alt="" />
              </button>
            </div>
              <h2>Storyline</h2>
              <p>{movie.plot}</p>

              <div className="mov-info">
                <h4>Genre</h4>
                <p>{movie.genre}</p>
                <h4>Release Date</h4>
                <p>{movie.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
