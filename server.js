const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Define a route to fetch words from the Words API
app.get("/api/words/:word", async (req, res) => {
  try {
    const response = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${req.params.word}`,
      {
        headers: {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "80c9499404mshe5716a378221d18p1486a7jsn10cc80006f24", // Replace with your actual API key
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Synonyms Endpoint
app.get('/api/synonyms/:word', async (req, res) => {
  const word = req.params.word;
  const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
    headers: {
      'X-RapidAPI-Key': '80c9499404mshe5716a378221d18p1486a7jsn10cc80006f24',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Examples Endpoint
app.get('/api/examples/:word', async (req, res) => {
  const word = req.params.word;
  const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
    headers: {
      'X-RapidAPI-Key': '80c9499404mshe5716a378221d18p1486a7jsn10cc80006f24',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
