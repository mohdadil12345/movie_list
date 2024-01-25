import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch("https://movie-lists-x2e8.onrender.com/movie", {
      method: "GET",
    });

    let data = await response.json();
    console.log(data);
    setmovie(data);
  };

  return (
    // <div></div>
    <div className="container">
      {movie.map((ele) => (
        <Link to={`/details/${ele._id}`} key={ele.id} className="itemlist">
          <img src={ele.image} alt="" />
          <div className="movie-details">
            <div className="rating">
              <p className="rating-info">{Number(ele.Rating).toFixed(1)}</p>
            </div>
            <h4>{ele.title}</h4>
            {/* <p>genre : {ele.genre}</p> */}
          <p>{ele.releaseDate}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Movie;
