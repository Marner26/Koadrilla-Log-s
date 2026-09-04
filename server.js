const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit_credentials', (req, res) => {
  const { username, password } = req.body;
  const file = 'credentials.txt';
  const current = fs.readFileSync(file, 'utf-8');
  const newCredentials = `Username: ${username}, Password: ${password}\n`;
  fs.appendFileSync(file, newCredentials, 'utf-8');
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
