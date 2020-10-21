const {Router} = require("express")
const AuthController = require("../controllers/AuthController")

const routes = Router()

routes.get("/", AuthController.home);
routes.post("/login", AuthController.login)

module.exports = routes