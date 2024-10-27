import React from "react";

import Button  from '../atoms/button/';
import Contact from '../atoms/contact';

import { TopRightMiniHeaderContainer } from './styles';


export default function TopRightMiniHeader() {

    React.useEffect(() => {
        console.log('button redered')
    }, [])

    return (
        <TopRightMiniHeaderContainer>
            <Contact />
            <Button />
        </TopRightMiniHeaderContainer>
          
    )
}