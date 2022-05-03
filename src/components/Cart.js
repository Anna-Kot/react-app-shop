import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector} from 'react-redux';

function Cart({productsSelect, selectProduct}) {
    const [total, setTotal] = useState(0);
    const count = useSelector((state) => state.dataName.value);

    useEffect(() => {
        setTotal(productsSelect.reduce((acc, el) => acc + el.price*count, 0) );
        console.log(count)
    }, [productsSelect, count])

    return <>
        {productsSelect.length ? <ListGroup className={'mb-3'}>
            <ListGroup.Item as="li" variant="primary">
                Кошик
            </ListGroup.Item>
            {productsSelect.map(product => <CartItem key={product.id} product={product} selectProduct={selectProduct}/>)}
            <h2>Total:</h2>
            <p><b className={'text-danger'}>{total} грн</b></p>
        </ListGroup> : ''}
    </>
}

export default Cart;