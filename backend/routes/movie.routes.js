const express = require("express")
const { movieModel } = require("../models/movie.model")
const movieRouter = express.Router()




// post
movieRouter.post("/add", async (req, res) => {

    try {

        const movie = new movieModel(req.body)
        await movie.save()
        res.status(200).send({ "msg": movie })
        console.log(movie)

    } catch (error) {
        res.status(400).send({ "error": err.message })
    }

})


// get
movieRouter.get("/", async (req, res) => {

    try {

        const movie = await movieModel.find()
        res.status(200).send({ "msg": movie })

    } catch (err) {
        res.status(400).send({ "error": err.message })
    }

})





// delete


movieRouter.delete("/delete/:movieID", async (req, res) => {
    const { movieID } = req.params

    try {

        await movieModel.findByIdAndDelete({ _id: movieID })
        res.status(200).send({ "msg": `The movieID with ID:${movieID} has been deleted` })



    } catch (err) {
        res.status(400).send({ "error": message })
    }

})




module.exports = {
    movieRouter
}