var fs = require('fs');
var path = require('path');
var config = hexo.config;
var apconfig = config.autoprefixer;
var autoprefixer = require('autoprefixer-core');


var dbg = apconfig.debug ? function(message) {
    console.log('[' + 'autoprefixer'.green + ']: ' + message);
} : function() {};

function process(file) {
    if (!fs.existsSync(file) || !file.match(/\.css/)) {
        return;
    }
    try {
        dbg(file + ' start');
        var encoding = apconfig.encoding || 'utf-8';
        var content = fs.readFileSync(file, encoding);
        fs.writeFileSync(file, autoprefixer.process(content, apconfig.browsers).css, encoding);
        dbg(file + ' end');
    } catch (e) {
        console.error('[' + 'Autoprefixer Error'.red + ']: ' + file + '\n' + e.message);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) {
        return;
    }
    var files = fs.readdirSync(dir);
    files.forEach(function(fileName) {

        var curPath = path.join(dir, fileName);
        var stats = fs.statSync(curPath);
        if (stats.isFile()) {
            process(curPath);
        } else {
            walk(curPath);
        }
    });
    return;
}

hexo.extend.generator.register('autoprefixer', function(locals, render, callback) {
    var time;
    if (!apconfig || !apconfig.enable) {
        dbg('autoprefixer disabled');
        callback();
        return;
    }
    time = Date.now();
    dbg('autoprefixer start...');
    walk(config.public_dir);
    dbg('autoprefixer end...');
    time = Date.now() - time;
    dbg('Files autoprefixed in ' + time + 'ms');
    callback();
});