# Widget grunt-init template

This is a template that uses `grunt-init` to create your initial directory setup for widgets.

## Install it

- Dependencies

To use this template, you need to install [`node`](https://nodejs.org/en/), [`npm`](http://npmjs.com/) and [`grunt-init`](https://github.com/gruntjs/grunt-init/). If you use Ubuntu you can install it with the following commands:

```bash
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g grunt-init
```

After installing `grunt-init` you will have the command `grunt-init` in youn system path.

- Get the template

`grunt-init` uses the directory `~/.grunt-init` (`%USERPROFILE%\.grunt-init\` on Windows) to search for the templates when you execute the command, so we need to place the templates there.

You can do it with the following commands in a generic linux:

```
mkdir -p ~/.grunt-init
git clone https://github.com/Wirecloud/grunt-init-wirecloud-widget.git ~/.grunt-init/wirecloud-operator
```

This will clone the template renamed to `wirecloud-widget` in the grunt-init templates directory.

## Use it

When you have the template in the templates directory, you just need to create a new directory, and inside it, execute grunt-init with the template (the promt delimiter is λ):

```
~ λ mkdir my-awesome-widget
~ λ cd my-awesome-widget
~/my-awesome-widget λ grunt-init wirecloud-widget
```

When you execute `grunt-init` with the template name (it's the name of the directory inside `~/.grunt-init`), it will ask you some questions to create the files.

Here are an example (if you press enter, it will be used the value inside the parenthesis):

```
my-awesome-widget λ grunt-init wirecloud-widget
Running "init:wirecloud-widget" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

Please answer the following:
[?] Is the project in javascript or in typescript? (js)
[?] Will the project use jquery? (Y/n)
[?] Author name (Author Name) Miguel Garcia
[?] Author email (authoremail@domain.com) mgarcia@conwet.com
[?] Project name (short_project_name) my_awesome_widget
[?] Long Project name (My project name) My Awesome Widget
[?] Description (The best project ever.) This is the GREAT widget
[?] Version (0.1.0)
[?] Project git repository (git://github.com/mgarcia/my-awesome-widget.git)
[?] Project homepage (https://github.com/mgarcia/my-awesome-widget)
[?] Project issues tracker (https://github.com/mgarcia/my-awesome-widget/issues)
[?] Licenses (MIT)
[?] Vendor name (Vendor) CoNWeT
[?] Vendor title (for copyright) (CoNWeT)
[?] Do you need to make any changes to the above before continuing? (y/N)

Writing .gitignore...OK
Writing .jscsrc...OK
Writing .jshintrc...OK
Writing .jshintrc-jasmine...OK
Writing .jshintrc-node...OK
Writing Gruntfile.js...OK
Writing README.md...OK
Writing src/DESCRIPTION.md...OK
Writing src/config.xml...OK
Writing src/css/styles.css...OK
Writing src/doc/changelog.md...OK
Writing src/doc/index.md...OK
Writing src/index.html...OK
Writing src/js/main.js...OK
Writing src/js/MyAwesomeWidget.js...OK
Writing src/test/fixtures/index.html...OK
Writing src/test/helpers/empty.js...OK
Writing src/test/js/MyAwesomeWidgetSpec.js...OK
Writing LICENSE-MIT...OK
Writing bower.json...OK
Writing package.json...OK
```

This will create the basic directory tree:

```
~/my-awesome-widget λ tree
.
├── bower.json
├── Gruntfile.js
├── LICENSE-MIT
├── package.json
├── README.md
└── src
    ├── config.xml
    ├── css
    │   └── styles.css
    ├── DESCRIPTION.md
    ├── doc
    │   ├── changelog.md
    │   └── index.md
    ├── index.html
    ├── js
    │   ├── main.js
    │   └── MyAwesomeWidget.js
    └── test
        ├── fixtures
        │   └── index.html
        ├── helpers
        │   └── empty.js
        └── js
            └── MyAwesomeWidgetSpec.js

8 directories, 16 files
```

You can use like the usual widget:

```
~/my-awesome-widget λ npm install
[...]
~/my-awesome-widget λ grunt
Running "jsbeautifier:files" (jsbeautifier) task
Beautified 1 files, changed 1 files...OK

Running "bower:install" (bower) task
>> Installed bower packages
>> Copied packages to /home/mgarcia/my-awesome-widget/build/lib/lib

Running "jshint:all" (jshint) task
>> 2 files lint free.

Running "jshint:grunt" (jshint) task
>> 1 file lint free.

Running "jshint:test" (jshint) task
>> 2 files lint free.

Running "jshint:grunt" (jshint) task
>> 1 file lint free.

Running "jscs:widget" (jscs) task
>> 2 files without code style errors.

Running "jscs:grunt" (jscs) task
>> 1 files without code style errors.

Running "jasmine:coverage" (jasmine) task
Testing jasmine specs via PhantomJS

 Test MyAwesomeWidget
   ✓ Dummy test

=============================== Coverage summary ===============================
Statements   : 100% ( 5/5 )
Branches     : 100% ( 0/0 )
Functions    : 66.67% ( 2/3 )
Lines        : 100% ( 5/5 )
================================================================================

1 spec in 0.056s.
>> 0 failures

Running "clean:temp" (clean) task
>> 0 paths cleaned.

Running "copy:main" (copy) task
Copied 2 files

Running "strip_code:multiple_files" (strip_code) task
Stripped code from build/src/js/MyAwesomeWidget.js

Running "strip_code:imports" (strip_code) task

Running "replace:version" (replace) task

Running "compress:widget" (compress) task
Created build/CoNWeT_my_awesome_widget_0.1.0-dev.wgt (36880 bytes)

Done, without errors.
```
