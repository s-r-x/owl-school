const path = require('path');

module.exports = {
  port: 8080,
  src_dir: path.join(__dirname, 'src'),
  dst_dir: path.join(__dirname, 'dist'),
  //images
  jpegQuality: 70,
  maxImageWidth: 1050,
};
