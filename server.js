import express from "express";
import getCatsRoute from "./routes/cats.routes.js";
import cors from "cors";
const app = express();

//middleware
app.use(express.json());
app.use(cors());
// app.get("/api", (req, res) => {
//   res.send("hello world");
// });

app.use("/api", getCatsRoute);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port 3001...`));
