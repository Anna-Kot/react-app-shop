import React, {useState} from "react";
import {ListGroup, CloseButton} from "react-bootstrap";

function CartItem({product, selectProduct}) {
    const [count, setCount] = useState(1);

    return <ListGroup.Item><span>{product.brand} {product.model} ({product.price} грн)</span>
    <div className="counterBlock">
        <div>
            <button className="button-cart" onClick={() => setCount(count + 1)}>+</button>
            <span className="cart-list-item__count" >{count}</span>
            <button className="button-cart" onClick={() => count>1 ? setCount(count - 1) : count === 1}>-</button>
        </div>
        <CloseButton className="deleteItem" onClick={() => selectProduct(product.id, false)}></CloseButton>
    </div>
        {/* <button className="button-cart" onClick={() => addPhoneInCart(id)}>+</button>
        <span className="cart-list-item__count">{count}</span>
        <button className="button-cart" onClick={() => removePhoneFromCart(id)}>-</button> */}
    {/* <CloseButton className="deleteItem" onClick={() => selectProduct(product.id, false)}></CloseButton> */}
    </ListGroup.Item>
}

export default CartItem;