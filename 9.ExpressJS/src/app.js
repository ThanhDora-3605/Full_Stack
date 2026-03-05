import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send("About");
});

app.get('/users', (req, res) => {
    res.json({
        data: req.query,
        success: true,
        message: "Users fetched successfully",
    });
});

app.get('/users/:id', (req, res) => {
    res.json({
        data: req.params,
        success: true,
        message: "User fetched successfully",
    });
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        data: req.body,
        success: true,
        message: "User created successfully",
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});