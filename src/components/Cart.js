import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem";

function Cart({products, selectProduct}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, el) => acc + el.price, 0));
    }, [products])

    return <>
        {products.length ? <ListGroup className={'mb-3'}>
            <ListGroup.Item as="li" variant="primary">
                Кошик
            </ListGroup.Item>
            {products.map(product => <CartItem key={product.id} product={product} selectProduct={selectProduct}/>)}
            <h2>Total:</h2>
            <p><b className={'text-danger'}>{total} грн</b></p>
        </ListGroup> : ''}
    </>
}

export default Cart;