"use strict";

let $ = require("jquery");

module.exports.printToDom = (prodsToPrint) => {
    $("#categories").change(() => {
        console.log("ready to print", prodsToPrint);
        let $selectedCat = $("#categories").val();
        console.log($selectedCat);
        for (let i=0; i<prodsToPrint.length; i++) {
            console.log(prodsToPrint[i]);
            if (prodsToPrint[i].hasClass($selectedCat)) {
            $("#products").append(prodsToPrint[i]);
            }
            else {
                prodsToPrint[i].remove();
            }
        }
    });
};