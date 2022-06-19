import express from 'express';

const thumbs = express.Router();

thumbs.get('/', (req, res) => {
  res.send('thumbs route');
});

export default thumbs;
