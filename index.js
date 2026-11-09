// Express.js Intro - write your server here.
const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// Run it with: node index.js   (stop it with Ctrl + C)

// Part 1: create an express app, a GET /greet endpoint and app.listen(3000)

app.get('/greet', (req, res) => {
    const timestamp = new Date().toISOString();
    res.json({ msg: `hi from get endpoint ${timestamp}` });
});

// Part 2: GET /greet/:name  and  GET /test (calls /greet/:name with fetch)

app.get('/greet/:name', (req, res) => {
    const name = req.params.name
    console.log(`i got name: ${name}`)
    res.json({ msg: `got name: ${name}` })
})

app.get('/test', async (req, res) => {
    const response = await fetch('http://localhost:3000/greet/Bob');
    const data = await response.json();
    res.json({ result: 'ok' });
})


// Part 3: POST /action  ("joke" / "cat fact", otherwise 400 "body is malformed")
app.post('/action', async (req, res) => {
    if (!req.body || typeof req.body.action !== 'string') {
        return res.status(400).json({ msg: "body is malformed" });
    }

    if (req.body.action === 'joke') {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        let joke;

        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} ${data.delivery}`;
        }

        joke = joke.toUpperCase();
        return res.json({ joke });
    }

    if (req.body.action === 'cat fact') {
        const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=11',
            {
                headers: {
                    'x-api-key': process.env.CAT_API_KEY
                }
            }
        );

        const data = await response.json();

        return res.json({ length: data.length });
    }

    return res.status(400).json({ msg: "body is malformed" });
});