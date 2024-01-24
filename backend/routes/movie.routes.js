const express = require("express")
const { movieModel } = require("../models/movie.model")
const movieRouter = express.Router()





movieRouter.post("/add",  async (req, res) => {

    try {

        const movie = new movieModel(req.body)
         await movie.save()
         res.status(200).send({ "msg":  movie})
         console.log(movie)

    } catch (error) {
        res.status(400).send({ "error": err.message })
    }

})




module.exports = {
    movieRouter
}