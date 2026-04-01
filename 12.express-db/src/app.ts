import express from "express";
import indexRoute from "./routes/index.route";
import adminRoute from "./routes/admin.route";
import path from "node:path";
import expressLayouts from "express-ejs-layouts";
const PORT: number = 3000;
const app = express();

app.use(express.json()); //parse body là json
app.use(express.urlencoded()); //parse body là urlendcoded

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layouts/main"); //default layout

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/media", express.static(path.join(__dirname, "uploads")));

app.use(indexRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

//Buổi sau:
// - Uploads file
// - Ejs
// - SQL (Cài trước docker)
