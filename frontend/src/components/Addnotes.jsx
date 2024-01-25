import React, { useState } from "react";

const hostapi = "https://assignment-backened.onrender.com";

function Addnotes() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [genre, setgenre] = useState("");
  const [releaseDate, setreleaseDate] = useState("");
  const [Rating, setRating] = useState("");
  const [cast, setcast] = useState("");

  const addMovies = async () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: title,
      image: image,
      genre: genre,
      releaseDate: releaseDate,
      Rating: Rating,
      cast: [],
      plot: body,
    });

    let response = await fetch(
      "https://movie-lists-x2e8.onrender.com/movie/add",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log(data);
    console.log(bodyContent);
  };

  const handleAddMovies = (e) => {
    e.preventDefault();

    addMovies();
  };
  return (
    <div>
      <h1>Add Movies</h1>
      <form className="signup_form" onSubmit={(e) => handleAddMovies(e)}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rating"
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => setbody(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="releaseDate"
          value={releaseDate}
          onChange={(e) => setreleaseDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => setgenre(e.target.value)}
          required
        />
        <button type="submit">Add notes</button>
      </form>
    </div>
  );
}

export default Addnotes;
