"use strict";

let createDomElements = require(".//createDomElements");

module.exports.formatData = (allData) => {
    let categories = allData[0];
    let products = allData[1];
    let types = allData[2];
// loop through product array to access prod objects 
    for (let i = 0; i < products.length; i++) {
        let currentProd = products[i];
        // loop over prod object to access keys
        for (let prod in currentProd) {
            let currentProdType = currentProd[prod].type;
            currentProd.prodName = currentProd[prod].name;
            currentProd.prodDescrip = currentProd[prod].description;
            // loop over types to match type id and prod type to get name of type as string
            for (let i=0; i<types.length; i++) {
                if ( currentProdType === types[i].id) {
                    currentProd.typeName = types[i].name;
                    currentProd.catID = types[i].category;
                }
            }
            // loop over category array to access objects and match product type with category name as string
            for (let i=0; i<categories.length; i++) {
                if (categories[i].id === currentProd.catID) {
                    currentProd.catName = categories[i].name;
                }
            }
        }    
    }
    createDomElements.createDomElements(products);
};