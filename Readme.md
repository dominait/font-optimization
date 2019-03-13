
# How To Optimize Google Fonts
<br/><br/>
      ## Speeding Up Fonts Using Preconnect and Preload
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
To donwload a full selection of Webfont formats for a specific Google font use <a href="https://google-webfonts-helper.herokuapp.com/fonts">google webfonts helper</a> 

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

 
## Netlify Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb8f2a9e-893b-46d5-ba91-7dd8376a67d5/deploy-status)](https://app.netlify.com/sites/fastfont/deploys)

## Speeding Up Load Times For GFonts
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="font" href="https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2" type="font/woff2"
        crossorigin="anonymous">
    <link rel="preload" as="font" href="https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2" type="font/woff2"
        crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">

## Suggested Reading List
Before you can use Sass, you need to set it up on the web site root folder.
- [SASS Basics](https://sass-lang.com/guide)
- [VSCode Live Sass Plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- [BrowserList](https://github.com/browserslist/browserslist)

## Key Concepts
<dl>
  <dt>CSS Resets</dt>
   <dd> Built in support in SCSS init for mini-css-reset, bootstraps reboot.css and latest version of sanitize.css</dd>
  <dt>SCSS configuration</dt>
   <dd>Configure VSCode plugin for minification and autoprefixing</dd>
  <dt>BrowserList</dt>
   <dd>You can also add <a href="https://github.com/browserslist/browserslist">browserlist</a> support for autoprefixing your css files </dd>
</dl>

## Videos
<dl>
  <dt>CSS Resets</dt>
   <dd> Built in support in SCSS init for mini-css-reset, bootstraps reboot.css and latest version of sanitize.css</dd>
  <dt>SCSS configuration</dt>
   <dd>Configure VSCode plugin for minification and autoprefixing</dd>
  <dt>BrowserList</dt>
   <dd>You can also add <a href="https://github.com/browserslist/browserslist">browserlist</a> support for autoprefixing your css files </dd>
</dl>

 
