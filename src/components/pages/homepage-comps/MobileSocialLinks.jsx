import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

const MobileSocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} /> LinkedIn
                </>
            ),
            href: 'https://www.linkedin.com/in/joederson-pereira/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} /> GitHub 
                </>
            ),
            href: 'https://github.com/JoePereira'
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={20} /> Mail
                </>
            ),
            href: 'mailto:joedersonpereeira@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={20} /> Curriculo 
                </>
            ),
            href: '/FullStack_Developer_Joederson.pdf',
            style: 'rounded-br-md',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                    <BsWhatsapp size={20} /> Wpp
                </>
            ),
            href: 'https://wa.me/5511918701996?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você!',
            style: 'rounded-br-md'
        },

        
    ]

    return (
        <div className="flex mt-4 desktop:hidden">
            <ul className="flex gap-2 flex-wrap justify-center">
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" + " " + style }>
                            <a href={href} className="flex gap-3 items-center w-full text-white text-sm" download={download} target="_blank" rel="noreferrer">
                            {child}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default MobileSocialLinks;
