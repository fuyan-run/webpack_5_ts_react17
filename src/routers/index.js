import React from "react";
import Home from 'view/Home';
import Page404 from 'view/Page404';
const Bus = () => {
    return <h1>Bus</h1>;
}

const Dss = () => {
    return <h3>Dss/Bus</h3>;
}

const Cart = () => {
    return <h3>Cart</h3>;
}

const Cart2 = () => {
    return <h3>Cart2</h3>;
}

export default [
    {
        key: 'Home',
        path: "/",
        exact: true,
        component: Home
    },
    {
        key: '/Dss/Bus',
        path: "/Dss/Bus",
        exact: true,
        component: Dss
    },
    {
        key: '1',
        path: "/Cart",
        component: Cart,
        exact: true,
        routes: [
        {
            key: '/Bus',
            path: "/Bus",
            component: Bus
        },
        {
            key: '/Cart2',
            path: "/Cart2",
            component: Cart2
        }
        ]
    },
    {
        key: '404',
        path: "*",
        component: Page404
    }
];