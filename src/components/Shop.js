import React, {useEffect, useState} from "react";
import {Container, Row} from 'react-bootstrap';
import Product from './Product';
import axios from "axios";
import Cart from "./Cart";
import SearchItem from "./SearchItem";
import { useSelector, useDispatch } from 'react-redux';
import { setProductsState } from '../store/dataShop';

function Shop() {
    const [productsSelect, setProducts] = useState([]);
    const [filteredItem, setFilteredItem] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const products = useSelector(state => state.dataName.products);
    const dispatch = useDispatch();
    

    // useEffect(() => {
    //     axios('https://restcountries.com/v2/all').then(products => {
            dispatch(setProductsState(products));
    //     });
    // }, [products])

    function processSearch(e) {
        let search = e.currentTarget.value.toLowerCase();
        setSearchItem(search)
        setFilteredItem(products.filter(product => product.brand.toLowerCase().includes(search)))
    }

    function selectProduct(id, value) {
        setProducts(products.map(product => {
            if(product.id === id) {
                return {...product, selected: value};
            }
            return {...product};
        }))
    }

    return <>
        <h1>Products</h1>
        <Cart productsSelect={productsSelect.filter(el => el.selected)} selectProduct={selectProduct}/>
        <SearchItem processSearch={processSearch} />
        <Container>
            <Row>
                    {((filteredItem.length || searchItem) ? filteredItem : products).map(product => <Product
                    selectProduct={selectProduct}
                    key={product.id} product={product}/>)}
            </Row>
        </Container>

    </>

}

export default Shop;