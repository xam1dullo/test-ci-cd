import express from 'express';

const app = express();
app.use(express.json());

app.use('/test', (req, res) => {
  res.send('test 1 completed');
});

app.use('/test2', (req, res) => {
  res.send('test 1 completed');
});

app.use('/abc', (req, res) => {
  res.send('abc!');
});

app.use('/aaa', (req, res) => {
  res.send('aaa!');
});

app.use('/najot', (req, res) => {
  res.send('talim!');
});

app.listen(1966, () => {
  console.log('server  on va  in too 1966 port');
});
