import { request, response } from "express";
import { loginUserService } from "../../service/users/login";

export default async function LoginUser(req = request, res = response) {
  const { email, password } = req.body;

  const loginService = await loginUserService(email, password, res);
  res.json(loginService);

}

