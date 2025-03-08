import express from "express";
import connectDB from "./db/db.js";
import userRoutes from "./routes/users.js";
import TodoRoutes from "./routes/todos.js";
import cors from "cors";

const app = express();


app.use(cors({
  origin: "http://localhost:5173", 
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
  optionsSuccessStatus: 200
}));


connectDB();


app.use(express.json());
app.use(userRoutes);
app.use(TodoRoutes);

app.use("/", (req,res) => {
    res.json({message: "Hello there"})
});


app.listen(3000, () => {
  console.log("server on ");
});
