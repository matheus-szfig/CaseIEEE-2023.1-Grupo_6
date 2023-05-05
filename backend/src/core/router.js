import { Router, request, response } from "express";

const router = Router();

router.get('/', (req = request, res = response) => {
  res.send("works");
})

export default router;