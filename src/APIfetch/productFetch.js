import {useState, useEffect} from 'react';
import axios from 'axios';

export function GetProductDetail(parentSetProductData, parentSetProductLoading){

    

    useEffect(() => {
        
    axios({
        method:"GET",
        url:'https://fakestoreapi.com/products'
    }).then(
        res => {
            // console.log(res.data)
            parentSetProductData(res.data);
        }
    ).catch((e) => console.log(e)).finally(parentSetProductLoading(false));
},[])

    // return productData;
}