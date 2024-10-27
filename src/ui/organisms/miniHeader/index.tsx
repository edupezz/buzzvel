import React from "react";

import TopRightMiniHeader from "../../molecules/topRightMiniHeader";
import Menu from "../../atoms/menu";

import { MiniHeaderContainer } from './styles';


export default function MiniHeader() {

    React.useEffect(() => {
        console.log('Menu redered')
    }, [])

    return (
        <MiniHeaderContainer>
            <Menu />
            <div style={{ gridArea: 'empty'}} />
            <TopRightMiniHeader />
        </MiniHeaderContainer>
    )
}