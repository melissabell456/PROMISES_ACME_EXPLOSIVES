"use strict";

module.exports.formatData = (allData) => {
    let categories = allData[0];
    let products = allData[1];
    let types = allData[2];
    console.log('categories', categories);
    console.log('types', types);
    console.log('products', products);
    // products need to have type description and category name added to object
    // match the product type to the type ID, and then add the category type name and type ID to the product object
    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        let productDetailsObj = Object.keys(products);
        console.log("productdeets", productDetailsObj);
    }
    // match the new type ID of the product to the category ID to get the category name
};