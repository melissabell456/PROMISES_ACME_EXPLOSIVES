"use strict";

let $ = require("jquery");

module.exports.printToDom = (prodsToPrint) => {
    $("#categories").change(() => {
        console.log("ready to print", prodsToPrint);
        let $selectedCat = $("#categories").val();
        for (let i=0; i<prodsToPrint.length; i++) {
            console.log(prodsToPrint[i]);
            $("#products").append(prodsToPrint[i]);
        }
    });
};