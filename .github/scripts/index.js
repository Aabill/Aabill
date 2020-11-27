const dotenv = require("dotenv");

dotenv.config();


console.log(process.env.PASSWORD);

let promise = fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.IG_TOKEN}`);

promise.then(response => {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
    }
    response.json().then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error.message);
    })
})