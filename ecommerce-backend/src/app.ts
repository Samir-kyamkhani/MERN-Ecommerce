import express from "express";

const app = express();
const data = "16kb";

app.use(express.json({ limit: data }));
app.use(express.urlencoded({ extended: true, limit: data }));
app.use(express.static("public"));

//Import router
import userRoute from "./routes/user.routes.js";
// import postRoute from "./routes/post.routes.js"

//Router decleration
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/posts", postRoute)

export default app;
