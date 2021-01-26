import express from "express";
import Pet from "../models/Pet";
const server = express.Router();

// Tener previamente el ID del OWNER 
// ESTA RUTA AGREGA UNA MASCOTA A UN OWNER
server.post("/", async ( req, res ) => {
  try {
    const pet = await Pet.create(req.body);
    await pet.save();
    res.send(pet);
  } catch (error) {
    res.json(error);
  }
});

// ESTA RUTA DEVUELVE TODAS LAS MASCOTAS 
server.get("/", async ( req, res ) => {
  try {
    const pets = await Pet.find();
    res.send(pets);
  } catch (error) {
    res.send('No encontró')
  }
});


// ESTA RUTA DEVUELVE UNA MASCOTA SEGUN SU ID
server.get("/:id", async( req, res ) => {
 try {
   const pet = await Pet.findById(req.params.id)
   res.send(pet);
 } catch (error) {
   res.send('no anduvo')
 }
})

export default server;