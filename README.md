# grunt-init-wirecloud-widget

> Create a WireCloud widget with [grunt-init], including Jasmine unit tests.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation

If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/Wirecloud/grunt-init-wirecloud-widget.git ~/.grunt-init/wirecloud-widget
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init wirecloud-widget
```

> Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files.

This template creates an widget project with a structure similar to the following one:

```
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
    │   └── MyAwesomeOperator.js
    └── test
        ├── fixtures
        │   └── index.html
        ├── helpers
        │   └── empty.js
        └── js
            └── MyAwesomeOperatorSpec.js

8 directories, 16 files
```
