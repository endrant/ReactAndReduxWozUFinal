import React from 'react';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

const Header = ({ title }) => (
    <div>
        <h1> {title} </h1>
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/mine">Mine</a>
        <a href="/repos">Repos</a>
        <a href="/counter">Counter App</a>
    </div> 
);

export default Header;