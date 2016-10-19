# glsl-strip-comments-loader
Strip comments from GLSL code for webpack.

## Usage

[![NPM](https://nodei.co/npm/glsl-strip-comments-loader.png?mini=true)](https://nodei.co/npm/glsl-strip-comments-loader/)

```js
// WebGL 1.0
module: {
    loaders: [
        {
            test: /\.(glsl|frag|vert)$/,
            loader: 'raw!glsl-strip-comments'
        }
    ]
}

// WebGL 2.0
module: {
    loaders: [
        {
            test: /\.(glsl|frag|vert)$/,
            loader: 'raw!glsl-strip-comments',
            query: {
                option: {
                    version: '300 es'
                }
            }
        }
    ]
}
```