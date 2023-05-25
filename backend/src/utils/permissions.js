import jwt from "jsonwebtoken";
import { request, response } from "express";

export class PermissionsDealer {
  static createToken(userInfo) {
    const signed = jwt.sign(
      JSON.stringify(userInfo),
      process.env.JWT_KEY || ""
    );
    return signed;
  }

  static verifyToken(token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_KEY || "");
      const userInfo = decodedToken.userInfo;
      return JSON.parse(userInfo);
    } catch (error) {
      throw error;
    }
  }
}
