const path = require("path");

module.exports = {
  // 👇 Add 'from' to silence PostCSS warning
  from: path.resolve(__dirname, "client/src/index.css"),

  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
