import express, { Application } from 'express';


const app: Application = express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
