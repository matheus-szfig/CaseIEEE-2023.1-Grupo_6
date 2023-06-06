import { database } from "../../../config/database";
import { ComparePassword } from "../../../utils/secure";
import jwt from "jsonwebtoken";

export async function loginUserService(email, password, res) {
  try {
    const user = await database("usuario").select("*").where({ email }).first();

    // Verifica se o usuário existe
    if (!user) {
      throw new Error("User not found");
    }

    // Verifica se a senha está definida e não é vazia
    if (!user.password) {
      throw new Error("Password undefined");
    }

    const verifyPassword = await ComparePassword(password, user.password);

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

    // Configuração cookie
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
