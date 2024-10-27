import React from "react";
import { MenuContainer } from './styles';


export default function Menu() {

    React.useEffect(() => {
        console.log('Menu redered')
    }, [])

    return (
        <MenuContainer>
            <span>soller</span>
            <nav>
                <a href="#">Products</a>
                <a href="#">Solutions</a>
                <a href="#">Services</a>
                <a href="#">Configure</a>
            </nav>
        </MenuContainer>
    )
}