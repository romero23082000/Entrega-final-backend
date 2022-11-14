const express = require("express");
const PetController = require("../controllers/pets");
const api = express.Router();

api.post("/addpet", PetController.addPet);
api.get("/getpets", PetController.getPets);

api.delete("/deletepet/:id",  PetController.deletePet);
api.put(
    "/updatepet/:id",
    PetController.updatePet
  );


module.exports = api