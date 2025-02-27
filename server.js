import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

// Create Web App
const server = express();

// Set views for ejs
server.set("view engine", "ejs")

// Configure .env files
dotenv.config();

// Web security
server.use(helmet());

// Cross origin resources
server.use(cors());

// Configure middleware for JSON, public folder, and
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({extended:true}))

