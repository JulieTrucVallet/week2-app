import Service from "../models/Service.js"

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
    // Toujours renvoyer une 200 même si vide
    return res.status(200).json(services)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Internal server error", error: err })
  }
}

export const getServiceByID = async (req, res) => {
  const { id } = req.params
  try {
    const serviceByID = await Service.findById(id)
    if (!serviceByID) {
      return res.status(404).json({ message: "Service not found" })
    }
    return res.status(200).json(serviceByID)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Internal server error", error: err })
  }
}

export const createService = async (req, res) => {
    try {
      const { title, description, price, category, address, availability } = req.body
      const image = req.file ? `/images/${req.file.filename}` : null
  
      const newService = await Service.create({
        title,
        description,
        price,
        category,
        address,
        availability,
        userID: req.user.id,
        image
      })
  
      return res.status(201).json({ message: "Your event has been created", service: newService })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: "Internal server error", error: err })
    }
  }
