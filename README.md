Hexo-generator-autoprefixer
===========================

This is a hexo generator plugin. It will parse CSS and add vendor prefixes using values from [Can I Use](http://caniuse.com) after `hexo generate`

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
  option:
    - '> 1%'
    - ''last 2 versions'
```


