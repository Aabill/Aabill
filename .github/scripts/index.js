const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();


console.log(process.env.PASSWORD);

axios.get('https://graph.instagram.com/me/media', {
    params: {
        fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username',
        access_token: process.env.IG_TOKEN
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("Done Axios");
  });  