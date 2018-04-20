/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= vendor_title %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

/* globals $, MashupPlatform, MockMP, {%= jsname %} */

(function () {

    "use strict";

    describe("{%= jsname %}", function () {

        var widget;

        beforeAll(function () {
            window.MashupPlatform = new MockMP({
                type: 'widget'
            });
        });

        beforeEach(function () {
            MashupPlatform.reset();
            widget = new {%= jsname %}();
        });

        it("Dummy test", function () {
            expect(widget).not.toBe(null);
        });

    });

})();
