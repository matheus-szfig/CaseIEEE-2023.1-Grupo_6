import { request, response } from "express";

export default function GetUsuarios(req = request, res = response) {
  res.send("works");
}
