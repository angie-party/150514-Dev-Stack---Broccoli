System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.5",
    "babel-runtime": "npm:babel-runtime@5.4.5",
    "core-js": "npm:core-js@0.9.11",
    "lodash-node": "npm:lodash-node@3.9.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.89",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.89",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash-node@3.9.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

