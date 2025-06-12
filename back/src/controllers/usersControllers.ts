import { Request, Response } from "express";

// GET /users => Obtener el listado de todos los usuarios.
export const getAllUsersController = async (req: Request, res: Response) => {
  res.status(200).send("Obtener el listado de todos los usuarioss");
};

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUserByIdController = async(req: Request, res: Response) => {
  res.status(200).send("Obtener el detalle de un usuario específico");
};

// POST /users/register => Registro de un nuevo usuario.
export const registerController = async(req: Request, res: Response) => {
  res.status(201).send("Registro de un nuevo usuario");
};

// POST /users/login => Login del usuario a la aplicación.
export const loginController = async(req: Request, res: Response) => {
  res.status(200).send("Login del usuario a la aplicación");
};