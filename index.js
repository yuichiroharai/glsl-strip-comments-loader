'use strict';

var loaderUtils = require('loader-utils');
var stripComments = require("glsl-strip-comments");

module.exports = function(source) {
    var query, result;

    if (this.cacheable) this.cacheable();

    query = loaderUtils.parseQuery(this.query);

    result = stripComments(source, query.option);

    return result;
};