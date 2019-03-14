
# How To Optimize Google Fonts
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb8f2a9e-893b-46d5-ba91-7dd8376a67d5/deploy-status)](https://app.netlify.com/sites/fastfont/deploys)

<br/> 
 ### Using Preconnect and Preload For Externally Hosted Fonts
 Use preconnect attribute of the link element to start a connection to the desired font resource. Then using prelod start the download of the font. You should see the font loaded just after the page load request.
  ```html
  <link 
    rel="preconnect" 
    href="https://fonts.gstatic.com" 
    crossorigin
  >
  <link 
    rel="preload" 
    as="font" 
    href="https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2" 
    type="font/woff2"
    crossorigin="anonymous"
  >
  ```
 
### Hosting Google Fonts Locally
For this method recommended by Google download the Google Font Webfont formats and use @fontface along with font-display.<br/>
To donwload a full selection of Webfont formats for a specific Google font use [google font helper](https://google-webfonts-helper.herokuapp.com/fonts).

```html
   <link rel="preload" href="./fonts/lato-v14-latin-regular.woff2" as="font" crossorigin>
    <style>
      
        @font-face {
            font-family: 'Lato';
            font-display: block;
            font-style: auto;
            font-weight: 400;
            src: local('Lato Regular'),
                url('./fonts/lato-v14-latin-regular.woff2') format('woff2');
        }
    </style>
```

 
 