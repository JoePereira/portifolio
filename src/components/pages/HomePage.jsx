import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import Sobre from "./homepage-comps/Sobre"
import MyProjetos from "./homepage-comps/MyProjetos"
import Techs from "./homepage-comps/Techs"
import Contato from "./homepage-comps/Contato"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/diploma-frontend-developer-practico.webp'},
        {image: '/images/certificates/diploma-frontend-academlo.webp'},
        {image: '/images/certificates/diploma-api-profesional.webp'},
        {image: '/images/certificates/diploma-html-practico.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico-estructuras.webp'},
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <Sobre />
            <MyProjetos />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contato />
        </>
    )
}

export default HomePage