/// <reference path="MashupPlatform.d.ts"/>

import MashupPlatform = require("MashupPlatform");

MashupPlatform.http.buildProxyURL("1", {contentType: "a"});

MashupPlatform.log.ERROR;

var pref1 = MashupPlatform.prefs.get("test");

var pref2 = MashupPlatform.prefs.get<boolean>("test");

if (typeof pref1 === "string") {
    pref1.length;
}

type t =  {[key: string]: boolean|number|string}

MashupPlatform.prefs.registerCallback(
    (prefs: t) => {prefs['test']}
);

MashupPlatform.prefs.set("test", 1);

MashupPlatform.operator.id;
MashupPlatform.operator.context.get("a");

MashupPlatform.operator.log("hi", MashupPlatform.log.ERROR);

var test = MashupPlatform.widget.getVariable<string>("test");
test.set("a");
var a = test.get();
a.length;
