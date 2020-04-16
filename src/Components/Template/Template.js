import React, {Fragment} from "react";
import Navbar from "../Common/NavBar/NavBar";

const Template = (props) => {

    const menuList = [
        {
            url: '/',
            route: 'home',
            name: 'Home'
        },
        {
            url: '/Admin',
            route: 'admin',
            name: 'Admin'
        },
        {
            url: '/StorePanel',
            route: 'projects',
            name: 'Store'
        },
        {
            url: '/AddToCart',
            route: 'cart',
            name: 'User'
        }
    ];

    return (
        <Fragment>
            <Navbar menuList={menuList} />
            {props.children}
        </Fragment>
    );
};

export default Template;