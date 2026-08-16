const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the server to receive JSON data
app.use(express.json());

// Serve your website files
app.use(express.static(path.join(__dirname, "public")));

// Test route
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "GABAY-PH backend is working!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`GABAY-PH server is running at http://localhost:${PORT}`);
});