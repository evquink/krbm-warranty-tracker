const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Serve the warranty form at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'warranty_form.html'));
});

app.listen(PORT, () => {
    console.log(`Warranty Tracker running on port ${PORT}`);
});
