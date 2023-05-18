import { Router, request, response } from "express";

const router = Router();

router.get('/', (req = request, res = response) => {
  res.send("works");
});

router.get('/teste', (req = request, res = response, next) => {
  
})

export default router;