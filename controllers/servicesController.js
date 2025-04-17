import Service from "../models/Service.js"

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find()
        return res.status(200).json(services)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(`Internal server error`, err)
    }
}

export const getServiceByID = async (req, res) => {
    const { id } = req.params
    try {
        const serviceByID = await Service.findById(id).populate('userID', '-password')
        if (!serviceByID) {
            return res.status(404).json(`Service not found`)
        }
        return res.status(200).json(serviceByID)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json(`Internal server error`, err)
    }
}

export const createService = async (req, res) => {
    try {
      const { title, description, price, category, address, availability } = req.body

      const parsedAvailability = availability === 'true'
  
      const newService = await Service.create({
        title,
        description,
        price,
        category,
        address,
        availability : parsedAvailability,
        image : req.file ? '/images/' + req.file.filename : '/images/default_event.jpg',
        userID: req.user.id,
      })
      if(newService){
        return res.status(201).json(`Your event has been created`, newService)
      }
    }
    catch (err) {
      console.log(err)
      return res.status(500).json(`Internal server error`, err)
    }
  }

  export const deleteServiceByID = async (req, res) => {
    const {id} = req.params
    try{
      const deletedService = await Service.findByIdAndDelete(id)
      if(deletedService){
        return res.status(200).json(`Service deleted successfully`, deletedService )
      }
      return res.status(404).json(`Service not found`)
    }
    catch (err) {
      console.log(err)
      return res.status(500).json(`Internal server error`, err)
    }
  }