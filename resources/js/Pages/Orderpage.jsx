// resources/js/Pages/OrderPage.jsx

import React from 'react';

const OrderPage = ({ orders }) => {
    return (
        <div>
            <h1>Your Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <h2>Order ID: {order.id}</h2>
                        <p>Status: {order.status}</p>
                        <ul>
                            {order.order_items.map((item) => (
                                <li key={item.id}>
                                    {item.product.name} - {item.quantity} x ${item.price}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderPage;
