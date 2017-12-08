/* globals $, MashupPlatform, MockMP, {%= jsname %} */

(function () {

    "use strict";

    describe("{%= jsname %}", function () {

        var widget;

        beforeAll(function () {
            window.MashupPlatform = new MockMP({
                type: 'operator'
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
