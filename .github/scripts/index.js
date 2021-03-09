const dotenv = require("dotenv");
const axios = require("axios");
const write = require('write');

dotenv.config();

let README = `
### Hi there 👋

 ---
 
- 🔭 I’m currently working on Upchannel ApS.
- 🌱 I’m currently learning [Laravel Jetstream Inertia](http://jetstream.laravel.com/1.x/stacks/inertia.html).
- 👯 I’m looking to collaborate on anything.
<!-- 🤔 I’m looking for help with my lovelife. -->
<!-- 💬 Ask me about anything but lovelife. -->
- 😄 Pronouns: he / him / his
- ⚡ Fun fact: I can make bubbles using my saliva.


#### Languages and tools
<img align="left" alt="Visual Studio Code" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" /><img align="left" alt="html5" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" /><img align="left" alt="css3" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /><img align="left" alt="sass" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" /><img align="left" alt="javascript" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /><img align="left" alt="npm" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" /><img align="left" alt="webpack" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png" /><img align="left" alt="vue" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" /><img align="left" alt="php" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png" /><img align="left" alt="laravel" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/laravel/laravel.png" /><img align="left" style="display: inline-block" alt="git" width="20px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />

<br/>

##  

### 📫 <domingoaaronbill@gmail.com>
[![Aabill's github stats](https://github-readme-stats.vercel.app/api?username=Aabill)](https://github.com/Aabill/github-readme-stats)

### Latest Instagram Posts
`;

function WriteNewREADME(data) {
    let data_images = data.filter(el => el.media_type == "IMAGE");

    let content = `${README}`;

    for (let i = 0; i < data_images.length; i++)
    {
        if (i < 3){
            content += `<span><a href="${data_images[i].permalink}"> <img align="center" alt="latest-instagram-post-${i}" width="250px" src="${data_images[i].media_url}"/></a></span>`;
        }
        else {
            break;
        }
    }
    write.sync('README.md', content, { newline: true }); 
}

axios.get('https://graph.instagram.com/me/media', {
    params: {
        fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username',
        access_token: process.env.IG_TOKEN
    }
  })
  .then(function (response) {
    // console.log(response.data.data);
    WriteNewREADME(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("Done Axios Get Request.");
  });  

