var ExtensionPlugin = require("nativescript-extensionPlugin").ExtensionPlugin;
var extensionPlugin = new ExtensionPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(extensionPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(extensionPlugin.greet()).toEqual("Hello, NS");
    });
});