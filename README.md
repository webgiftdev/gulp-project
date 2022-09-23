# gulp-project
## Automate web developer's daily routine with Gulp.

If you're a terminal nerd and a web developer this tool will help you increase your productivity! 

Convert png, jpg and gif images to WebP, minify all these images' types (jpg, png, gif, webp and svg), minify and beautify CSS, JS, HTML are just the begging! Hope you'll love it as i do! Let's get started by **Opening the terminal**!

## Install and configure
### Clone the repository
```shell
git clone https://github.com/webgiftdev/gulp-project.git
``` 
and then 
```shell 
cd gulp-project
```

### Check for node, npm, and npx
[Follow these quick start tutorial](https://gulpjs.com/docs/en/getting-started/quick-start) from Gulp official website and verify if you have installed node, npm and npx.

### Install the gulp command line utility
```shell
npm install --global gulp-cli
```

Try `sudo` npm.. in case that you have privileges issues.

### Synchronize your Gulp installation with the required dependencies
```shell
npm i -D gulp
```

Thats it! 

## Usage
### exportWebP
Copy png, jpg and gif images to the folder `exportWebP/images/`. 

The converted **WebP** files will be located under `exportWebP/`.

```shell
gulp exportWebP
```

[![Screenshot-2022-09-22-at-14-06-15.png](https://i.postimg.cc/g056rr5W/Screenshot-2022-09-22-at-14-06-15.png)](https://postimg.cc/Mc7GFZqP)


### minifyImages
Place png, jpg, gif, svg and webp images to the folder `minifyImages/images/` and get the **minified version** for each them under `minifyImages/` folder.

```shell
gulp minifyImages
```

[![Screenshot-2022-09-22-at-14-51-02.png](https://i.postimg.cc/RZQZjdKy/Screenshot-2022-09-22-at-14-51-02.png)](https://postimg.cc/TK1xbrkJ)


### minifyCSS
Put css files to the folder `minifyCSS/unminified/` and get the **minified version** respectively under `minifyCSS/` folder.

```shell
gulp minifyCSS
```


### minifyJS
Copy javascript (js) files to the folder `minifyJS/unminified/` and get the **minified version** for each one of them under `minifyJS/` folder.

```shell
gulp minifyJS
```


### minifyHTML
Place HTML files to the folder `minifyHTML/unminified/` and get the **results** under `minifyHTML/` folder.

```shell
gulp minifyHTML
```


### beautify
Put CSS, JS and HTML files to the folder `beautify/files/` and get their **human readable version** for each one of them under `beautify/` folder.

```shell
gulp beautify
```


This tool is created and used by [webgift dev](https://webgift.dev). A gifted office that build custom projects online!