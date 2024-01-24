import React, { useEffect, useState } from "react";

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
    <div className="container">
      {movie.map((ele) => (
        <div key={ele.id} className="itemlist">
          <img src={ele.image} alt="" />
          <h4>{ele.title}</h4>
          <p>genre : {ele.genre}</p>
          <p>rating : {ele.Rating}</p>
          {/* <p>releaseDate : {ele.releaseDate}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Movie;
