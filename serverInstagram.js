const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());

app.get('/instagram-user', async (req, res) => {
  try {
    const { username } = req.query;

    const options = {
      method: 'GET',
      url: 'https://instagram-looter2.p.rapidapi.com/profile',
      params: {
        username: username
      },
      headers: {
        'content-type': 'application/json',
        'Content-Security-Policy': "script-src 'self' 'https://ssl.google-analytics.com';",
        'X-RapidAPI-Key': '6c4153b579msh3b88fb9e42fb3dap1c3822jsn700d8fa34f4a',
        'X-RapidAPI-Host': 'instagram-looter2.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
