const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3001; // Choose any available port for your server

const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('data.json'));

app.use(bodyParser.json());
// Define your API routes here
app.get('/api/data', (req, res) => {
    res.status(200).json(jsonData);
});

app.post('/api/data', (req, res) => {
    if (!req.body) {
        return res.status(501).json({message: 'Product payload empty'})
    }
    const id = "10013433"
    const created = "1660665689"
    const newData = req.body;
    jsonData.push({ id, created, ...newData });
  
    fs.writeFileSync('data.json', JSON.stringify(jsonData));
  
    res.status(201).json({ message: 'Products added successfully' });
  });

// Serve the React app
app.use(express.static('../build')); // Assuming the React app build is located in the "build" directory

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});