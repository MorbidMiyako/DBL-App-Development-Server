const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require("./actions/actionsRouter")

const server = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

server.use(cors(corsOptions)) // Use this after the variable declaration

server.use(helmet());

server.use('/api/projects', projectsRouter);

server.use("/api/actions", actionsRouter)

server.get("/", (req, res) => {
  res.status(200).json({ message: "API IS WORKING" })
})

module.exports = server;
