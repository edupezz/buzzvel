import React from "react";
import {ButtonContainer}  from './styles'


export default function Button() {

    React.useEffect(() => {
        console.log('button redered')
    }, [])

    return (
        <ButtonContainer>
            Request a Quote
        </ButtonContainer>
    )
}