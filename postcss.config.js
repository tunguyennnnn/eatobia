module.exports = ({ _file, _options, env }) => ({
  "plugins": {
    "autoprefixer": {},
    "postcss-preset-env": {},
    "cssnano": (env === 'production') ? {} : false
  }
});
