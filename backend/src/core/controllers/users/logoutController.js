import { request, response } from "express";

export default async function LogoutUser(req = request, res = response) {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  res.json({
    status: true,
  });
}
