import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/joederson-pereira/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/JoePereira'
        },
        {
            id: 3,
            child: (
                <>
                Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:joedersonpereeira@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                Curriculo <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/FullStack_Developer_Joederson.pdf',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                Wpp <BsWhatsapp size={30} />
                </>
            ),
            href: 'https://wa.me/5511918701996?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você!',
            style: 'rounded-br-md',
        },
    ]

    return (
        <div className="hidden desktop:flex flex-col top-[35%] left-0 fixed z-30">
            <ul>
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-primary-color/90 ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px]" + " " + style }>
                        <a href={href} className="flex justify-between items-center w-full text-black font-semibold ml-4" download={download} target="_blank" rel="noreferrer">
                        {child}
                        </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default SocialLinks;
