import express from "express";
import indexRoute from "./routes/index.route";
import path from "node:path";
import expressLayouts from "express-ejs-layouts";

const PORT: number = 3000;
const app = express();

app.use(express.json());
app.use(expressLayouts);
//view engine: ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main");

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/files", express.static(path.join(__dirname, "..", "uploads")));
app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

//Buổi sau:
// - Uploads file
// - Ejs
// - SQL (Cài trước docker)
