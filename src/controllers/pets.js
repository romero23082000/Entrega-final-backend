const Pet = require('../models/pets');

/**
 * @author Andres Romero 
 * Metodo para agregar una mascota a la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const addPet = (req, res) => {
    const pet = new Pet();
    const { name_pet, raza_pet, age_pet, color_pet, weight_pet, datBith_pet } = req.body;
    
    pet.name_pet = name_pet;
    pet.raza_pet = raza_pet;
    pet.age_pet = age_pet;
    pet.color_pet = color_pet;
    pet.weight_pet = weight_pet;
    pet.datBith_pet = datBith_pet;

    pet.save((err, petStored)=>{
        if(err){
            res.status(500).send({message:"La mascota ya existe"})
        }else{
            if(!petStored){
                res.status(404).send({message: "Error al crear la mascota"})
            }else{
                res.status(200).send({pet: petStored, message:"Mascota creada exitosamente"})
            }
        }
    })
}

/**
 * Metodo para consultar todas las mascotas registradas
 * @param {*} req 
 * @param {*} res 
 */
const getPets = (req, res) => {
    Pet.find().then((pets) => {
      !pets
        ? res.status(404).send({ message: "No se ha encontrado mascotas" })
        : res.status(200).send({ pets });
    });
  };

async function updatePet(req, res){
    let petData = req.body;
    petData.name_pet = req.body.name_pet.toLowerCase();
    const params = req.params

    Pet.findByIdAndUpdate({_id:params.id}, petData,(err, petUpdate)=>{
        err
        ?res.status(500).send({message:"Error del servidor"})
        : !petUpdate
        ? res.status(404).send({message:"No se encontro la mascota"})
        : res.status(200).send({message:"Mascota actualizada"})
    })
}

const deletePet = (req, res) => {
    const { id } = req.params;
  
    Pet.findByIdAndRemove(id, (err, petDeleted) => {
      err
        ? res.status(500).send({ message: "Error del servidor." })
        : !petDeleted
        ? res.status(404).send({ message: "Mascota no encontrada." })
        : res
            .status(200)
            .send({ message: "La mascota a sido eliminada exitosamente." });
    });
  };

module.exports = {
    addPet,
    getPets,
    updatePet,
    deletePet
}