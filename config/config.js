var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'kitty-project'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost/kitty-project-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'kitty-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/kitty-project-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'kitty-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/kitty-project-production'
  }
};

module.exports = config[env];
