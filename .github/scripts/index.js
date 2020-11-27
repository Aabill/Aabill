const dotenv = require("dotenv");
const axios = require("axios");
const write = require('write');

dotenv.config();


axios.get('https://graph.instagram.com/me/media', {
    params: {
        fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username',
        access_token: process.env.IG_TOKEN
    }
  })
  .then(function (response) {
    console.log(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("Done Axios Get Request.");
  });  

  write.sync('../../README.md', 'testing write some data...', { newline: true }); 