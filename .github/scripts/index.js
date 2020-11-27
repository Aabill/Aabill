const dotenv = require("dotenv");
const axios = require("axios");

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

function WriteFile()
{

var fh = fopen("../../test.md", 3); // Open the file for writing

if(fh!=-1) // If the file has been successfully opened
{
    var str = "Some text goes here...";
    fwrite(fh, str); // Write the string to a file
    fclose(fh); // Close the file
}
console.log("File not opened.")
}

WriteFile();