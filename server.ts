
import dotenv from 'dotenv';
dotenv.config();

import express,{ Request, Response } from 'express';
const connectDb = require("./configs/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const {corsOptions} = require("./configs/cors")
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerjsdoc = require("swagger-jsdoc")
import { swaggeroptions } from './swagger-jsdocs';
//const swaggerFile = require('./swagger_output.json')


connectDb();
const app = express();

const port = process.env.PORT || 4000;


const spacs = swaggerjsdoc(swaggeroptions);
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auths", require("./routes/authRoutes"));

app.use(errorHandler);
app.use(cors(corsOptions)) 


app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});

//swagger autogen 
//app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//swagger jsdocs
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(spacs))


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, ()=> {
    console.log(`Backend is running on http://localhost:${port}`)
  })
}
