const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
//Boardgame = require("./models/boardgame");
const boardgamesRoutes = require("./routes/boardgames.routes");
app.use(express.json());



mongoose.connect("mongodb://localhost:27017/boardgames", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
/*
//home
app.get("/", (req,res) => {
    res.send("Hello Boardgamer!");
});

//retorna a lista de boardgames
app.get("/boardgames", async (req,res) => {
    const boardgames = await Boardgame.find();
    res.send(boardgames);
});

//retorna apenas um boardgame pelo id
app.get("/boardgames/:id", async (req,res) => {
    try{
        const boardgame = await Boardgame.findById(req.params.id);
        if (boardgame == null){
            return res
                .status(404)
                .send({message: "Não é possível encontrar o boardgame. "});
        }
        res.send(boardgame);
    }catch (err){
        return res.status(500).send({ message: err.message });
    }
});

//cria um novo registro
app.post("/boardgames", async (req,res) => {
    const boardgame = new Boardgame({
        nome: req.body.nome,
        imagemUrl: req.body.imagemUrl,
        estilo: req.body.estilo,
        maxJogs: req.body.maxJogs,
    });
    //validação
    if(!boardgame || !boardgame.nome || !boardgame.imagemUrl || !boardgame.estilo || !boardgame.maxJogs){
        res.status(404).send({
            message: "Boardgame inválido. Certifique-se de que preencheu os dados para registrá-lo"
        });
        return;
    }
    const boardgameSalvo = await boardgame.save();
    res.send(boardgameSalvo)
});

//Atauliza um filme pelo ID
app.put("/boardgames/:id", async (req,res) => {
    try{
        const boardgame = await Boardgame.findByIdAndUpdate(req.params.id);
        const newBoardgame = req.body;
        if( newBoardgame.nome && newBoardgame.imagemUrl && newBoardgame.estilo && newBoardgame.maxJogs != null){
            boardgame.nome = newBoardgame.nome;
            boardgame.imagemUrl = newBoardgame.imagemUrl;
            boardgame.estilo = newBoardgame.estilo;
            boardgame.maxJogs = newBoardgame.maxJogs;
        }else{
            return res.status(400).send({ message: "Não foi possivel realizar sua reqisição. Verifique os campos e tente novamente"});
        }
        const updatedBoardgame = await Boardgame.save();
        res.send(updatedBoardgame);
    }catch(err){
        return res.send(500).send({message: err.message});
    }
});

//remover um registro pelo id
app.delete("/boargame/:id", async (req,res) => {
    try{
        const boardgame = await Boardgame.findById(req.params.id);
        if( boardgame == null){
            return res.status(404).send({message: "Boardgame não encontrado"});
        }
        await boardgame.remove();
        res.send({message: "Boardgame deletado com sucesso!"});
    }catch(err){
        return res.status(500).send({ message: err.message});
    }
});
*/



const port = 5000;

app.use(boardgamesRoutes);

app.listen(port, () =>{
    console.info(`App rodando em: http://localhost:${port}`);
});

