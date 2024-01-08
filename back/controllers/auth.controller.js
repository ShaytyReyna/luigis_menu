import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, apellido_p, apellido_m, email, password, genero, zona} = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      apellido_p,
      apellido_m,
      email,
      password: passwordHash,
      genero,
      zona,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    // create access token
    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      apellido_p: userSaved.apellido_p,
      apellido_m: userSaved.apellido_m,
      email: userSaved.email,
      genero: userSaved.genero,
      zona: userSaved.zona,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const login_r = async (req, res) => {
    try {
        const {email_r, contraseña} = req.body;
        const restauranteFound = await Restaurante.findOne({email_r});
        if (!restauranteFound) return res.status(400).json({message: "Cuenta inexistente"});

        const restauranteMatch = await bcrypt.compare(contraseña, restauranteFound.contraseña);
        if (!restauranteMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        res.json ({
            id: restauranteFound._id,
            email_r: restauranteFound.email_r,
            contraseña: restauranteFound.contraseña,
        }); 
    } catch (error) {
    console.log(error);
    };
}
export const register_r = async (req, res) => {
    const {nombre_restaurante, email_r, contraseña, descripcion, direccion, comida} = req.body
    try {
        const contraseñahash = await bcrypt.hash(contraseña, 10)
        const newRestaurante = new Restaurante ({
            nombre_restaurante,
            email_r,
            contraseña: contraseñahash,
            descripcion,
            direccion,
            comida
        })
        const restauranteSaved =  await newRestaurante.save()
        res.json(restauranteSaved) 
    } catch (error) {
        console.log(error);
    };
}