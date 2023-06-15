import { database } from "../../../config/database";
import { ComparePassword } from "../../../utils/secure";
import jwt from "jsonwebtoken";

export async function loginUserService(email, senha, res) {

  try {

    const user = await database("usuario").select("*").where({ email, ativo:1 }).first();
    if (!user) {
      throw new Error("User not found");
    }

    const verifyPassword = await ComparePassword(senha, user.senha);
    if (!verifyPassword) {
      throw new Error("Invalid password");
    }

    const tokenPayload = {
      UserInfo: {
        id: user.id,
        nome: user.name,
        email: user.email,
      }
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_KEY || "", { expiresIn: "48h" });
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return {
      status: true,
      message: "Login successful",
    };

  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: error.message,
    };
  }

}
