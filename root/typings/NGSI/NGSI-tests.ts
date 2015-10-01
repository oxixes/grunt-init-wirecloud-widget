/// <reference path="NGSI.d.ts"/>

import NGSI = require("NGSI");

var ent: NGSI.Entity = {id: "test"};

var attr: NGSI.Attribute = {name: "test2"};

var cond: NGSI.Condition = {type: "type1", values: ["hola", "adios"]};

var atrv: NGSI.AttributeValue = {name: "test2", type: "mytype", contextValue: {}};

var atru: NGSI.AttributeUpdate = {attributes: [atrv], entity: ent};

var atrd: NGSI.AttributeDeletion = {attributes: attr, entity: ent};

var dur: NGSI.Duration = "100seconds";

var conn = new NGSI.Connection("http://example.org", {ngsi_proxy_url: "", request_headers: {test: "nais"}, use_user_fiware_token: true});
