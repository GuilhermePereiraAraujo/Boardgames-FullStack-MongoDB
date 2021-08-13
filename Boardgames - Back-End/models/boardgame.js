const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BoardgamesSchema = new Schema({
    nome: {type: String, required: true},
    imagemUrl: {type: String, required: true},
    estilo: {type: String, required: true},
    maxJogs: {type: String, required: true},
});

const Boardgame = mongoose.model('Boardgame', BoardgamesSchema);
module.exports = Boardgame;
