// const express = require("express");
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(cors()); // any request can access this server
app.use(express.json()); // parse json body

Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);

app.listen(process.env.PORT || 4000);
