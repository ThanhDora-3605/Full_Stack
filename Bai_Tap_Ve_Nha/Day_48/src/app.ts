import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.get("/", (_req, res) => {
  res.json({ message: "API Users Express + TS + Prisma" });
});
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({ error: err.message });
});

const server = app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
