// const express = require("express");
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(cors()); // any request can access this server
app.use(express.json()); // parse json body

UserRoutes(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);

app.listen(process.env.PORT || 4000);
