import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import easyshop from '/images/projectsImages/easyshop.webp'
import pokedex from '/images/projectsImages/pokedex.webp'
import acciovocabulary from '/images/projectsImages/acciovocabulary.webp'
import rickandmorty from '/images/projectsImages/rickandmorty.webp'
import academloshop from '/images/projectsImages/academloshop.webp'
import weatherapp from '/images/projectsImages/weatherapp.webp'
import dogsblog from '/images/projectsImages/dogsblog.webp'
import crud from '/images/projectsImages/crud.webp'
import moviepedia from '/images/projectsImages/moviepedia.webp'
import tictactoe from '/images/projectsImages/tictactoe.webp'
import soccerquotes from '/images/projectsImages/soccerquotes.webp'
import fortunecookies from '/images/projectsImages/fortunecookies.webp'
import todomachine from '/images/projectsImages/todomachine.webp'
import ProjectCard from '../../ProjectCard'
import { ModalInfo } from '../../ModalInfo'

const AllProjetos = () => {

    const projects = [
        {
          id: 1,
          title: "EasyShop",
          description: "Ecommerce criado com React JS e Tailwind CSS",
          Tecnologias: "Javascript, React, Redux, Tailwind CSS",
          src: "/images/projectsImages/easyshop.webp",
          // demo: "https://easyshop-bydt.netlify.app/",
          // code: "https://github.com/JoePereira/EasyShop",
        },
        {
          id: 2,
          title: "Accio Vocabulary",
          description:
            "Landing page de um canal do Youtube onde é ensinado inglês com filmes, series e musicas.",
          Tecnologias: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/acciovocabulary.webp",
          // demo: "https://diegotellezc.github.io/landing-accio-vocabulary/",
          // code: "https://github.com/JoePereira/landing-accio-vocabulary",
        },
        {
          id: 3,
          title: "Dogs Blog",
          description:
            "DogsBlog é uma página para quem ama cachorros onde você pode encontrar alguns artigos para cuidar cada vez mais dos seus animais.",
          Tecnologias: "Javascript, HTML5, CSS3",
          src: "/images/projectsImages/dogsblog.webp",
          // demo: "https://dogs-blog-diegotellezdev.netlify.app/",
          // code: "https://github.com/JoePereira/dogsBlog",
        },
        {
          id: 4,
          title: "Academlo Shop",
          description:
            "Academlo Shop é um E-Commerce desenvolvido com Vanilla Javascript. Criei um slider com banner ads e voce pode alterar entre o modo escuro e claro.",
          Tecnologias: "Javascript, HTML5, CSS3",
          src: "/images/projectsImages/academloshop.webp",
          // demo: "https://academlostoregen24.netlify.app/",
          // code: "https://github.com/JoePereira/academloShop",
        },
        {
          id: 5,
          title: "Weather App",
          description:
            "Uma aplicação para você saber o clima na sua localizacao atual em graus Celsius ou graus Fahrenheit. Você também pode pesquisar o clima ao redor do mundo.",
          Tecnologias: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/weatherapp.webp",
          // demo: "https://weatherappbydt.netlify.app/",
          // code: "https://github.com/JoePereira/weather-app",
        },
        {
          id: 6,
          title: "Rick and Morty",
          description:
            "Um app para você procurar Rick e Morty.",
          Tecnologias: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/rickandmorty.webp",
          // demo: "https://rickandmorty-bydt.netlify.app/",
          // code: "https://github.com/JoePereira/RickAndMortyApp",
        },
        {
            id: 7,
            title: "Petshop",
            description:
            "Site de uma petshop para venda de servicos e produtos.",
            Tecnologias: "Typescript, Next.js, Tailwind CSS, Shadcn",
            src: "/images/projectsImages/petshop.webp",
            // demo: "https://rickandmorty-bydt.netlify.app/",
            // code: "https://github.com/JoePereira/RickAndMortyApp",
        },
        {
            id: 8,
            title: "Dashboard",
            description:
            "Painel Dashboard com atualizacao em tempo real para dados de vendas, pedidos e novos clientes.",
            Tecnologias: "Typescript, Next.js, Tailwind CSS, Shadcn",
            src: "/images/projectsImages/dashboard.webp",
            // demo: "https://rickandmorty-bydt.netlify.app/",
            // code: "https://github.com/JoePereira/RickAndMortyApp",
        },
        ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [SelectedProject, setSelectedProject] = useState({});

    const handleModalInfo = (project) => {
        setModalIsOpen(true);
        setSelectedProject(project);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section name="Projetos" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projetos</h2>
                    <p className='py-6'>Veja alguns de meus projetos.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                    handleModalInfo={handleModalInfo}
                    />
                ))}
                </div>
                {/* <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div> */}
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-Home-heart mr-2'></i></span>
                    Retornar
                </Link>
            </div>

            {modalIsOpen && (
                <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
            )}
        </section>
    )
}

export default AllProjetos
