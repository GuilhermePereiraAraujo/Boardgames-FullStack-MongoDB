const BoardgameService = require("./../services/boardgames.services");
const mongoose = require("mongoose");

const boardgameService = new BoardgameService();

class BoardgamesController {
  async getBoardgames(req, res) {
    const boardgames = await boardgameService.findAll();
    res.send(boardgames);
  }

  async getBoardgamesById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const boardgame = await boardgameService.findById(id);

    // Validação das mensagens
    if (!boardgame) {
      res.status(404).send("boardgame não encontrado.");

      return;
    }

    res.send(boardgame);
  }

  async createBoardgame(req, res) {
    const boardgame = req.body;

    // Validação

    if (!boardgame || !boardgame.nome || !boardgame.imagemUrl) {
      res.status(400).send({
        message:
          'boardgame inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    const boardgameSalvo = await boardgameService.createBoardgame(boardgame);

    res.send(boardgameSalvo);
  }

  async updateBoardgame(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("Código inválido.");
      return;
    }

    const boardgame = await boardgameService.findById(id);

    // Validação das mensagens
    if (!boardgame) {
      res.status(404).send("boardgame não encontrado.");

      return;
    }

    const novoBoardgame = req.body;

    if (!Object.keys(novoBoardgame).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (!novoBoardgame || !novoBoardgame.nome || !novoBoardgame.imagemUrl) {
      res.status(400).send({
        message:
          'Boardgame inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    boardgameService.updateBoardgame(novoBoardgame, id);
    const boardgameAtualizado = await boardgameService.findById(id);

    res.send(boardgameAtualizado);
  }

  async deleteBoardgame(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const boardgame = await boardgameService.findById(id);

    // Validação das mensagens
    if (!boardgame) {
      res.status(404).send("boardgame não encontrado.");

      return;
    }

    await boardgameService.deleteBoardgame(id);

    res.send({ message: "boardgame excluído com sucesso" });
  }
}

module.exports = BoardgamesController;