/// <reference path="{%= jsname %}"/>

"use strict";

/* import-block */
import mod = require("{%= jsname %}");
let {%= jsname %} = mod.{%= jsname %};
/* end-import-block */

let widget = new {%= jsname %}();
document.addEventListener("DOMContentLoaded", () => widget.init(), false);
