const express = require("express");
const router = express.Router();

const BoardgamesController = require("./../controllers/boardgames.controller.js");

const boardgamesController = new BoardgamesController();

router.get("/boardgames", boardgamesController.getBoardgames);

router.get("/boardgames/:id", boardgamesController.getBoardgamesById);

router.post("/boardgames", boardgamesController.createBoardgame);

router.put("/boardgames/:id", boardgamesController.updateBoardgame);

router.delete("/boardgames/:id", boardgamesController.deleteBoardgame);

module.exports = router;