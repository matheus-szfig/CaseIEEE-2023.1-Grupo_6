import { request, response } from "express";
import { updateUserService } from "../../service/users/update";
import { HashPassword } from "../../../utils/secure";

export default async function UpdateUser(req = request, res = response) {
  const updateId = req.params.id;
  let updatedUser = {};
  const notify = req.body.notify;
  const password = req.body?.password;

  if (String(notify)) updatedUser["notify"] = notify;
  if (password) updatedUser["senha"] = HashPassword(password);
  let updateService = await updateUserService(updateId, updatedUser);
  res.json(updateService);
}
