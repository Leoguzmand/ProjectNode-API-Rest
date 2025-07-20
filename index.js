import cors from "cors";
//import "dotenv/config";
import express from "express";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({ message: "API Rest con Node.js" })
})

app.use((req,res,next) => {
    res.status(404).json({ error: "Not Found" })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));