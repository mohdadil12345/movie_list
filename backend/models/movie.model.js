


const mongoose = require("mongoose")

const movieSchema = ({
    title: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      releaseDate: {
        type: String,
        required: true,
      },
      Rating: {
        type: String,
        required: true,
      },  
      cast: [{
        type: String,
        required: true,
      }],
      plot: {
        type: String,
        required: true,
      },
})

const movieModel = mongoose.model("movie",movieSchema)

module.exports = {
    movieModel
}