const request = require('request');

const url = 'https://api.darksky.net/forecast/9dd6afa355c80a565f09909d92097ca8/23.530986,-46.627470?units=si';

request.get({
    url: url,
    json: true
}, (error, response) => {

    const data = response.body;
    const currently = data.currently;

    console.log(data)
});

console.log('test');