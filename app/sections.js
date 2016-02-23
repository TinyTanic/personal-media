var fs = require('fs');
var path = require('path');

var routers = [];
var models = [];

var loadSection = function (section) {
  basePath = __dirname + '/sections/' + section;

  /* Loading the section router */
  routers.push({
    router: basePath + '/router',
    section: section
  });

  /* Loading all the section models */
  fs.readdir(basePath + '/models', function (err, sectionModels) {
    if (err) throw err;
    sectionModels.forEach(function (model) {
      models.push({
        model: model,
        section: section
      });
    });
    models.concat(sectionModels);
  });
};

var mount = function (app) {
  models.forEach(function (model) {
    try {
      require(model.model);
    } catch (e) {
      console.error('Failed loading section model for ' + model.section);
      console.error(e);
    }
  });

  routers.forEach(function (router) {
    try {
      app.use('/' + router.section + '/', require(router.router));
    } catch (e) {
      console.error('Failed loading section router for ' + router.section);
      console.error(e);
    }
  });

  return app;
}

module.exports = {
  loadSection: loadSection,
  mount: mount
}
