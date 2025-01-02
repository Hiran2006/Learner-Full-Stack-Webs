const express = require("express");
const connectDB = require("./db");
const userRouter = require("./routes/users");
const authRouter = require('./routes/auth');
app.use('/api', authRouter);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

connectDB();

module.exports = app;
