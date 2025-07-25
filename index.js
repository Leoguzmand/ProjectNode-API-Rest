import cors from "cors";
import "dotenv/config";
import express from "express";
const app = express();
// Se crea App como instancia de Express

// Permitir todos los origenes con CORS
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({ message: "API Rest con Node.js" })
})

// RUTAS
import productsRouter from "./src/routes/products.routes.js";
app.use("/api", productsRouter);

// AUTENTICACION
import authRouter from "./src/routes/auth.routes.js";
app.use("/api/auth", authRouter);


// Manejo de Error 404
app.use((req,res,next) => {
    res.status(404).json({ error: "Not Found" })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));