// server/server.js
import express from "express";
import productsRouter from "./routes/products.js";
import searchRouter from "./routes/search.js";
import adminRouter from "./routes/admin.js";
import { initializeSlugs } from "./db/queries.js";
import cors from "cors"

const port = 8000;
const app = express();

app.use(express.json());
// Dodaj CORS middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'],
  credentials: true
}));

// Serve static files iz public direktorija
app.use(express.static('public'));

// Inicijalizuj slugove pri startu servera
initializeSlugs();

// Registracija ruta
app.use("/products", productsRouter);
app.use("/search", searchRouter);
app.use("/admin", adminRouter);


app.listen(port, () => {
  console.log("Server running on port", port);
});

