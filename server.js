const express = require('express');
const app = express();
const port = 3000; // Change to your desired port

app.use(express.static('public')); // Serve static files from the 'public' folder

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});





// app.get('/location/:id', (req, res) => {
//     // Fetch location data based on the 'id' parameter from a database
//     // Render the 'location.html' page with the location-specific data
//     res.sendFile(__dirname + '/public/location.html');
// });

