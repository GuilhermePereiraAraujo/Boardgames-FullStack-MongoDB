const boardgamesModel = require("./../models/boardgame");

class BoardgameService{
    async findAll(){
        return await boardgamesModel.find();
    }

    async findById(id){
        return await boardgamesModel.findById(id);
    }

    async createBoardgame(boardgame){
        return await new boardgamesModel(boardgame).save();
    }

    async updateBoardgame(boardgame, id){
        return await boardgamesModel.findOneAndUpdate({_id: id}, boardgame);
    }

    async deleteBoardgame(id){
       return await boardgamesModel.findByIdAndDelete(id);
    }
}

module.exports = BoardgameService;