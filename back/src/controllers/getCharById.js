const axios = require("axios");
const { response } = require("express");
const URL = "https://localhost:3001/rickandmorty/character/"

async function getCharById(req, res) {
const { id } = req.params;

 try { 
    const response = await axios(URL + id);
    const character = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species,
    };
    res.status(200).json(character)
} catch(error) { 
    res.status(500).json(error.message)
}
}


module.exports = getCharById;
