import { Router } from "express"
import { getAllUsersController, getUserByIdController, loginController, registerController } from "../controllers/usersControllers"


const usersRouter= Router()

// GET /users => Obtener el listado de todos los usuarios.
usersRouter.get("/", getAllUsersController)


// GET /users/:id => Obtener el detalle de un usuario específico.
usersRouter.get("/:id", getUserByIdController)


// POST /users/register => Registro de un nuevo usuario.
usersRouter.post("/register", registerController)

// POST /users/login => Login del usuario a la aplicación.
usersRouter.post("/login", loginController )

export default usersRouter