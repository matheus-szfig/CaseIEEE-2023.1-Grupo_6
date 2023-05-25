import { request, response } from "express";

export default function GetUsers(req = request, res = response) {
  res.send("works");
}


