import React, { Component } from 'react';
import ReactDOM from 'react-dom' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import * as _ from "lodash";
import Product from "../product/product";
import "./products.css";
/**
    This places all products in a scrollable div.
*/
export default function Products(props) {

    let items = [];
    for (let i = 0; i < props.products.length; i++) {
        items.push(
                <Product
                    key={i} 
                    src={props.products[i].file}
                    title={props.products[i].name}
                    description={props.products[i].description}
                    price={props.products[i].price}
                    info={props.products[i].info}
                    >
                </Product>
        )
    }
    return (
        <section className={"products"}>
        <header>
            <h2 className="products__title"> {props.title} </h2>
        </header>
        <div className={"products__items"}>
        {items}
        </div>
        </section>

    )
}

