// server/server.js
import express from "express";
import productsRouter from "./routes/products.js";
import searchRouter from "./routes/search.js";
import adminRouter from "./routes/admin.js";
const port = 8000

const app = express();
app.use(express.json());

app.use("/products", productsRouter);
app.use("/search", searchRouter);
app.use("/admin", adminRouter);








app.listen(port, () => {
    console.log(`server startade on port ${port}`)
});
    
    