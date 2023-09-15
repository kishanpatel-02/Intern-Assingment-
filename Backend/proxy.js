import express, { json } from 'express';
// import fetch from 'node-fetch';
import cors from 'cors';
// const { type } = require('@testing-library/user-event/dist/type');
import axios from 'axios';
const app = express();

app.use(json());

app.use(cors({
    origin: '*',
}));

const port = 3001;
app.post('/api/dataforseo', async (req, res) => {
    try {
            const post_array2 = [];
            post_array2.push({
                "url": `https://${req.body.target}`,
                "enable_javascript": true,
                "custom_js": "meta = {}; meta.url = document.URL; meta;"
              });
            const response2 = await axios({
                url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
                method: 'POST',
                auth: {
                    username: 'dhruvghevariya2005@gmail.com',
                    password: 'fde2d454fd9624c4'
                },
                data: post_array2,
                headers: {
                    'content-type': 'application/json'
                }

            })
            var result2 =  await response2['data']['tasks'];
            res.json(result2);

    } catch (error) {

        res.status(500).send(error);
    }

});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
