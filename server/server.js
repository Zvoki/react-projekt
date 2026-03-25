// Register route groups
import express from "express";
import productsRouter from "./routes/products.js";
import searchRouter from "./routes/search.js";
import adminRouter from "./routes/admin.js";
import { initializeSlugs } from "./db/queries.js";
import cors from "cors"

const port = process.env.PORT || 8000;
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3002",
  "https://react-projekt-yw6b.onrender.com", // backend
  "https://react-projekt-frontend.onrender.com"   // frontend

];
const app = express();
//Parse incommming JSON request bodies
app.use(express.json());

app.use(cors({
  origin: allowedOrigins,
  credentials: true 
}));


app.use(express.static('public'));


initializeSlugs();


app.use("/products", productsRouter);
app.use("/search", searchRouter);
app.use("/admin", adminRouter);


app.listen(port, () => {
  console.log("Server running on port", port);
});

