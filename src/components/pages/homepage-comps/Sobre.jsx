import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const Sobre = () => {
    return (
        <section name="Sobre" 
        className='relative w-full md:h-screen text-white h-unset'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>Sobre mim</h2>
                    </div>

                    <p className="mb-4 py-6">E aí! Sou de São Paulo e sou formado em Análise e Desenvolvimento de Sistemas pela FIAP, onde também fui premiado nos projetos FIAP NEXT e FIAP GS. Sempre tive a sensação de que podia ir além, e minha curiosidade me levou a mergulhar de cabeça no universo da programação.
                    </p>

                    <p>Com minha criatividade, atenção aos detalhes e determinação, descobri um talento enorme para desenvolver aplicações web e mobile. Sou completamente fascinado pelo mundo da tecnologia e pelas infinitas possibilidades que ele oferece. Tenho certeza de que posso criar projetos incríveis — tanto no lado profissional quanto pessoal — e quero muito construir isso com você!.</p>

                    <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                        Veja mais
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                
            </div>

            <ScrollLink to="Projetos" smooth duration={500} className='absolute bottom-0 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default Sobre
