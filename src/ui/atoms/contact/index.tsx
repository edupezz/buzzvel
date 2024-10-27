import React from "react";

import phoneLogo from '../../../assets/phone.svg'
import { ContactContainer } from './styles';


export default function Contact() {

    React.useEffect(() => {
        console.log('Contact redered')
    }, [])

    return (
        <ContactContainer>
            <img src={phoneLogo} alt='Logo' />
            <span>555 818 282</span>
        </ContactContainer>
    )
}