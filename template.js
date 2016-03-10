/*
 * grunt-init-gruntfile
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

// Basic template description.
exports.description = 'Create a WireCloud widget with grunt-init, including Jasmine unit tests.'


// Template-specific notes to be displayed before question prompts.
exports.notes = '';


// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';
// exports.warnOn = '*.js';
// exports.warnOn = '*.json';
// exports.warnOn = 'LICENSE';
// exports.warnOn = 'README.md';
// exports.warnOn = 'src';
// exports.warnOn = '*.ts';

var sanitizeComparer = function sanitizeComparer(reg) {
    return function(value, data, done) {
        done(null, reg.test(value));
    };
};

var sanitizeLower = function sanitizeLower(value, data, done) {
    done(null, value.toLowerCase());
};

var compose = function compose(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
};

var capitalizeAndRemoveUnderscore = function capitalizeAndRemoveUnderscore(old) {
    var t = old.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
    return t.charAt(0).toUpperCase() + t.slice(1);
};

// The actual init template.
exports.template = function(grunt, init, done) {
    init.process([
        {
            name: "js",
            message: "Is the project in javascript or in typescript?",
            default: "js",
            validator: /(js|ts)/i,
            sanitize: sanitizeComparer(/js/i),
            warning: "Valid options: \"js\" for javascript or \"ts\" for typescript"
        },
        // {
        //     name: "build_system",
        //     message: "Will the project use grunt, ... (now only grunt)",
        //     default: "grunt",
        //     validator: /grunt/i,
        //     sanitize: sanitizeLower,
        //     warning: "Valid options: \"grunt\""
        // },
        {
            name: "jquery",
            message: "Will the project use jquery?",
            default: "Y/n",
            sanitize: sanitizeComparer(/^\s*y[es\s]*/i)
        },
        init.prompt("author_name"),
        init.prompt("author_email"),
        {
            name: "name",
            message: "Project name",
            default: function (value, data, done) {
                done(null, path.basename(process.cwd()).replace(/-widget$/, ''));
            }
        },
        // Widget Name
        {
            name: "project_name",
            message: "Long Project name",
            default: "My project name"
        },
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('licenses'),
        {
            name: "vendor",
            message: "Vendor name",
            default: "Vendor",
            warning: ""
        },
        {
            name: "vendor_title",
            message: "Vendor title (for copyright)",
            default: function(value, data, done) {
                done(null, data.vendor);
            },
            warning: ""
        }

    ], function(err, props){
        var exportsOverride = {};
        props.jsname = capitalizeAndRemoveUnderscore(props.name);
        props.bower = true; // Change way to determine bower?
        props.ngsi = false; // ??
        props.wirecloud = false; // ??
        var bowerdeps = {};
        var bowerdevDependencies = {};
        var devDependencies = {
            "mock-applicationmashup": "^0.1.3"
        };
        props.isgrunt = true; // props.build_system === "grunt";

        if (!props.js) {
            devDependencies["typescript"] = "^1.5.0";
            // console.log("Not implemented yet for typescript");
            // return;
        }

        if (props.bower) {
            // initialize things only for widgets!
            devDependencies["bower"] = "^1.3.12";

            if (props.jquery) {
                // bower
                bowerdeps["jquery"] = null;
                exportsOverride["jquery"] = {
                    "js": "dist/jquery.min.js"
                };
                // Test with jasmine have to be checked?
                // devDependencies["jasmine-jquery"] = "~2.0.6";
            }
        }

        if (props.isgrunt){
            if (props.js) {
                devDependencies["grunt-contrib-jshint"] = "^0.10.0";
                devDependencies["grunt-jscs"] = "^1.2.0";
            } else {
                devDependencies["grunt-typescript"] =  "^0.7.0";
                devDependencies["grunt-tslint"] = "^2.4.0";
            }

            if (props.jquery) {
                devDependencies["jquery"] = "^2.1.1";
                devDependencies["jasmine-jquery"] = "~2.1.0";
            }

            if (props.bower) {
                devDependencies["grunt-bower-task"] = "^0.4.0";
            }

            // if test?
            devDependencies["grunt-contrib-jasmine"] = "^1.0.0";
            devDependencies["grunt-template-jasmine-istanbul"] = "^0.3.0";

            devDependencies["grunt-jsbeautifier"] = "~0.2.10";
            devDependencies["grunt-contrib-clean"] = "~0.6.0";
            devDependencies["grunt-contrib-compress"] = "^0.11.0";
            devDependencies["grunt-contrib-copy"] = "^0.8.0";
            devDependencies["grunt-strip-code"] = "^0.1.2";
            devDependencies["grunt-text-replace"] = "~0.4.0";
        }

        // Files to copy (and process).
        var files = init.filesToCopy(props);
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Write bower.json :)
        if (props.bower) {
            init.writePackageJSON("bower.json",
                                  {name: props.name,
                                   dependencies:  bowerdeps,
                                   devDependencies:  bowerdevDependencies},
                                  function(pkg, props) {
                                      pkg.exportsOverride = exportsOverride;
                                      return pkg;
                                  });
        }

        // Write package.json :)
        var nobj = {};
        nobj.name = props.name;
        nobj.private = true;
        nobj.vendor = props.vendor;
        nobj.description = "This package.json file is only used for installing npm dependencies. But this is not an installable node package, but a WireCloud widget. Take a look into src/config.xml for more details about this widget"
        nobj.devDependencies = devDependencies;
        init.writePackageJSON('package.json', nobj, function(pkg, props) {
            pkg.vendor = props.vendor;
            return pkg;
        });
    });
};
