/// <reference path="../../typings/MashupPlatform/MashupPlatform.d.ts"/>
{% if (ngsi) { %}/// <reference path="../../typings/NGSI/NGSI.d.ts"/>
 {% }%}

"use strict";

/* import-block */
import MashupPlatform = require("MashupPlatform");
{% if (ngsi) { %}import NGSI = require("NGSI");{% }%}
/* end-import-block */

export class {%= jsname %} {
    init() {
        console.log("Loaded!!");
    }
}
