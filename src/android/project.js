var efs = require('../utils/fs');

function ProjectAndroid(project, config) {

}

ProjectAndroid.fromConfig = function(config) {
  var project = efs.loadFile(config.project);
  return project ? new ProjectAndroid(project, config) : null;
}

module.exports = ProjectAndroid;
