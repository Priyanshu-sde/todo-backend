import express from "express";
import connectDB from "./db/db.js";
import userRoutes from "./routes/users.js";
import TodoRoutes from "./routes/todos.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "https://grand-tapioca-57e48b.netlify.app" }));
app.use(
  cors({
    origin: "https://grand-tapioca-57e48b.netlify.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.use(express.json());
app.use(userRoutes);
app.use(TodoRoutes);

app.listen(3000, () => {
  console.log("server on ");
});
