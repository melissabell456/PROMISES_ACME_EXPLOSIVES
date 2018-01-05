"use strict";

let dataFactory = require(".//dataFactory");
let dataFormatter = require(".//dataFormatter");
let printToDom = require(".//printToDom");
let $ = require("jquery");

let promArr = [
    dataFactory.getCategories(),
    dataFactory.getProducts(),
    dataFactory.getTypes()
];

Promise.all(promArr)
.then( (dataArr) => {
dataFormatter.formatData(dataArr);
});

