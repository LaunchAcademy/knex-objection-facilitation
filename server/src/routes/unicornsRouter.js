import express from "express"
import Unicorn from "./../models/index.js"

const unicornsRouter = new express.Router()

unicornsRouter.get("/", async (req, res) => {
  try {
    const unicorns = await Unicorn.query()
    return res.status(200).json({ unicorns: unicorns })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

export default unicornsRouter