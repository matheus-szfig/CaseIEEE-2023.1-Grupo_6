import exppress, { urlencoded, json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "../core/router";

const app = exppress();
const corsConfig = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsConfig));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

app.use(router);

export default app;
