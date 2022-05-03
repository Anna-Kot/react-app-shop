import React from "react";
import {ListGroup, CloseButton} from "react-bootstrap";
import { increment, decrement } from '../store/dataShop';
import { useSelector, useDispatch } from 'react-redux';

function CartItem({product, selectProduct}) {
    const count = useSelector((state) => state.dataName.value);

    const dispatch = useDispatch();

    return <ListGroup.Item><span>{product.brand} {product.model} ({product.price} грн)</span>
    <div className="counterBlock">
        <div>
            <button className="button-cart" onClick={() => dispatch(increment())}>+</button>
            <span className="cart-list-item__count" >{count}</span>
            <button className="button-cart" onClick={() => dispatch(decrement())}>-</button>
        </div>
        <CloseButton className="deleteItem" onClick={() => selectProduct(product.id, false)}></CloseButton>
    </div>
    </ListGroup.Item>
}

export default CartItem;