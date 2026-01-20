import UserService from "../services/user.js"

class UserController{
    constructor(){}

    async register(req, res){
        const data = await UserService.register(req.body) 

        res.status(data.status).json({...data})
    }

    async login(req, res){
        const data = await UserService.login(req.body) 

        res.status(data.status).json({...data})
    }
}

export default new UserController()