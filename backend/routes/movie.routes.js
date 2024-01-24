const express = require("express")
const { movieModel } = require("../models/movie.model")
const { auth } = require("../middleware/auth.middleware")
const movieRouter = express.Router()




// post
movieRouter.post("/add", async (req, res) => {

    try {

        const movie = new movieModel(req.body)
        await movie.save()
        res.status(200).send( movie )
        console.log(movie)

    } catch (error) {
        res.status(400).send({ "error": err.message })
    }

})

// movieRouter.use(auth)


// get
movieRouter.get("/",async (req, res) => {

    try {

        const movie = await movieModel.find()
        res.status(200).send( movie )

    } catch (err) {
        res.status(400).send({ "error": err.message })
    }

})


movieRouter.get("/:id",async (req, res) => {

    const { id } = req.params
    try {

        const movie = await movieModel.findOne({_id: id})
        res.status(200).send( movie )

    } catch (err) {
        res.status(400).send({ "error": err.message })
    }

})



// patch
movieRouter.patch("/update/:movieID", async (req, res) => {
    const { movieID } = req.params

    try {

        await movieModel.findByIdAndUpdate({ _id: movieID} ,  req.body)
        res.status(200).send({ "msg": `The movieID with ID:${movieID} has been updated` })



    } catch (err) {
        res.status(400).send({ "error": message })
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