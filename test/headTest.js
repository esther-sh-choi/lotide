const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([]), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
