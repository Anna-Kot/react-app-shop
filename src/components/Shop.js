import React, {useEffect, useState} from "react";
import {Container, Row} from 'react-bootstrap';
import Product from './Product';
import axios from "axios";
import Cart from "./Cart";
import SearchItem from "./SearchItem";

function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredItem, setFilteredItem] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        axios('https://restcountries.com/v2/all').then(data => {
            setProducts([
                {id: 1, count: 1, brand: 'SYOSS', description: 'Шампунь SYOSS Color с Цветком Камелии для окрашенных и тонированных волос 440 мл', model: 'Шампунь SYOSS Color',   price: 100.00, selected: false, imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/258469002.jpg'},

                {id: 2, count: 1, brand: 'Lee Stafford', description: ' Шампунь увлажняющий Lee Stafford с кокосовым маслом 250 мл', model: 'Шампунь увлажняющий Lee Staffor',price: 223.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/84440543.jpg'},

                {id: 3, count: 1, brand: 'GLISS', description: 'Защитный шампунь GLISS Supreme Length для длинных волос, склонных к повреждениям и жирности 400 мл', model: 'Защитный шампунь GLISS',price: 99.00, selected: false, imgSrc: 'https://content2.rozetka.com.ua/goods/images/big_tile/166780265.jpg'},
                
                {id: 4, count: 1, brand: 'SYOSS', description: 'Мицеллярный шампунь Syoss Pure Volume для нормальных и тонких волос 440 мл', model: 'Мицеллярный шампунь Syoss',   price: 109.00, selected: false, imgSrc: 'https://content2.rozetka.com.ua/goods/images/big_tile/258469172.jpg'},

                {id: 5, count: 1, brand: 'Numero', description: 'Шампунь восстанавливающий с овсом Brelil Numero 1000 мл', model: 'Шампунь восстанавливающий Numero',price: 375.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/259783110.jpg'},

                {id: 6, count: 1, brand: 'Yellow', description: 'Шампунь для вьющихся волос Yellow Curls Low Shampoo 500 мл', model: 'Шампунь для вьющихся волос Yellow',price: 515.00, selected: false, imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/261727997.jpg'},

                {id: 7, count: 1, brand: 'Numero', description: 'Шампунь для блеска на основе ценных масел Brelil Numero 1000 мл', model: 'Шампунь для блеска Numero',   price: 395.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/259783042.jpg'},

                {id: 8, count: 1, brand: 'Volume', description: 'Шампунь для увеличения объема CDC Volume Shampoo 250 мл', model: 'Шампунь для увеличения объема Volume',price: 460.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/263316961.jpg'},

                {id: 9, count: 1, brand: 'SYOSS', description: 'Шампунь SYOSS SalonPlex с цветком сакуры для истощенных и поврежденных волос 440 мл', model: 'Шампунь SYOSS SalonPlex',price: 105.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/258469024.jpg'},

                {id: 10, count: 1, brand: 'Unice', description: 'Безсульфатный шампунь Unice с прополисом и миндалем, 250 мл', model: 'Безсульфатный шампунь Unice',   price: 99.00, selected: false, imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/254909797.jpg'},

                {id: 11, count: 1, brand: 'SYOSS', description: 'Шампунь Syoss Repair с водорослями вакаме для сухих и поврежденных волос 440 мл', model: 'Шампунь Syoss Repair',price: 111.00, selected: false, imgSrc: 'https://content1.rozetka.com.ua/goods/images/big_tile/258468986.jpg'},

                {id: 12, count: 1, brand: 'GLISS', description: 'Питательный шампунь GLISS Oil Nutritive для сухих и поврежденных волос 400 мл', model: 'Питательный шампунь GLISS',price: 105.00, selected: false, imgSrc: 'https://content.rozetka.com.ua/goods/images/big_tile/166779303.jpg'}
            ])
        });
    }, [])

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
        <Cart products={products.filter(el => el.selected)} selectProduct={selectProduct}/>
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