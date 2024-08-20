const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

// 모든 도메인에서 요청을 허용
app.use(cors());

// 또는 특정 도메인만 허용
app.use(cors({
    origin: 'http://localhost:5500'
}));

app.get('/search', (req, res) => {
    const query = req.query.query;
    const url = `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}&display=5&start=1`;

    const options = {
        url: url,
        headers: {
            'X-Naver-Client-Id': 'Vu2aqGX7dU78M70tu32Z',
            'X-Naver-Client-Secret': 'eiz0z8DTmY'
        }
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(body);
        } else {
            res.status(response.statusCode).send(error);
        }
    });
});

/*
app.listen(5500, '127.0.0.1', () => {
    console.log('Proxy server is running on http://127.0.0.1:5500');
});
*/

app.listen(5500, () => {
    console.log('Proxy server is running on http://localhost:5500');
});
