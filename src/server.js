import express from "express";
import verifyNameFieldMid from "./middlewares/verifyNameField-middleware.js";
import routers from "./routes/routes.js";
import auth from "./middlewares/auth.middleware.js";
import db from "./database/db.js";

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(auth);
app.post('/login', login)
app.use(routers);
app.use(verifyNameFieldMid);

app.listen(PORT, () => {
    console.log(`Server running in localhost:${PORT}`)
})