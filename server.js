import express from "express";

const app = express();
app.use(express.json())

app.use('/test', (req, res) => {
  res.send("test 1 completed")
})

app.use('/test2', (req, res) => {
  res.send("test 1 completed")
})
app.use('/abc', (req, res) => {
  res.send("abc!")
})

app.listen(1956, () => {
  console.log("server  on va  in too 1956 port");
});
