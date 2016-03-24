Hexo-generator-autoprefixer
===========================

This is a hexo generator plugin. It will parse CSS and add vendor prefixes using values from [Can I Use](http://caniuse.com) after `hexo generate` with [Autoprefixer](https://www.npmjs.org/package/autoprefixer-core)


> This plugin can only work on Hexo 2.x but the newest version of Hexo is 3.x

#Install
```
$ npm install -S hexo-generator-autoprefixer
```

#Option
You can configure this plugin in `_config.yml`.

```
autoprefixer:
  enable: true
  debug: true
  cascade: false
  browsers:
    - '> 1%'
    - 'last 2 versions'
  safe: true
```

* enable: should autoprefix enabled
* debug: should show log
* cascade: should Autoprefixer uses Visual Cascade, if CSS will be uncompressed
* browsers: list of browsers, which are supported in your project
* safe: enables Safe Mode(a special safe mode to parse broken CSS) in PostCSS. By default false
