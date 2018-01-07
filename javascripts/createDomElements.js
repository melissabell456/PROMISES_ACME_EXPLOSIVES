"use strict";

let $ = require('jquery');
let printProds = require("./printToDom");

module.exports.createDomElements = (prods) => {
    console.log(prods);
    let divCollection = [];
    for (let i=0; i<prods.length; i++) {
        // console.log(prods[i]);
        let currentProd = prods[i];
        let $newDiv = $(document.createElement('div'));
        $newDiv.addClass(`${prods[i].catName}`).append(`<h2>${prods[i].prodName}</h2><h3>Product Type: ${prods[i].typeName}</h3><h4>Product Category: ${prods[i].catName}</h4><br><p>${prods[i].prodDescrip}</p>`);
        console.log($newDiv);
        divCollection.push($newDiv);
            }
    printProds.printToDom(divCollection);
};