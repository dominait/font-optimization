
# How To Optimize Your Web Fonts
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb8f2a9e-893b-46d5-ba91-7dd8376a67d5/deploy-status)](https://app.netlify.com/sites/fastfont/deploys)
<br/>

### How You Going Handle Fonts.
 1. Linking Fonts To Page.
 1. Self Hosting
 1. Self Hosting System UI Font Stack [hosting system ui](https://css-tricks.com/snippets/css/system-font-stack/#get-to-the-snippet-already)
 
### Robot Font Using Link
Take a look at the CSS provided to you by Google Fonts when using Roboto. There are three link elements.  The first two links use the relationship attribute set to precconect which is a hint to browsers that your going to be using these locations so bump up the priority on getting these connections made.  
The last link is the request that initiates the download of the Lato font.  

1. fonts.googleapis.com will return the stylesheet for the Lato font
1. fonts.gstatic.com will return the best matched font for your browser woff2 woff etc.   

```css
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
```
  


 
 


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
            font-display: swap;
            font-style: auto;
            font-weight: 400;
            src: local('Lato Regular'),
                url('./fonts/lato-v14-latin-regular.woff2') format('woff2');
        }
    </style>
```

 
 