
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(2 < 4 === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(4 < 2 === false, 'what is a false value?');
});

test("equal", function() {
    equal(4 - 2, 1 + 1, 'what will satisfy the equal assertion?');
});
