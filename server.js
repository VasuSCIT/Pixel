const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(bodyParser.json());

// Handle validation request
app.post('/validate', (req, res) => {
    const { cell1, cell2 } = req.body; // Expect values for the '?' cells
    // Implement your validation logic here
    // Example: Assume correct values are 7 and 5 for the two '?' cells
    if (cell1 == 4 && cell2 == 9) {
        res.json({ success: true, message: 'CTF{You_found_me!}' });
    } else {
        res.json({ success: false, message: 'Incorrect values, try again!' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
