'use strict';

var loaderUtils = require('loader-utils');
var stripComments = require("glsl-strip-comments");

module.exports = function(source) {
    var option, result;

    if (this.cacheable) this.cacheable();

    option = loaderUtils.getOptions(this.query);

    result = stripComments(source, option);

    return result;
};