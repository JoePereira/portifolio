import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Contato = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        axios.post('https://getform.io/f/feff19e5-27a9-4f74-be5d-9699c4b245ed', formData)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#0DFC4B',
                    title: 'Muito obrigado pelo contato. Será um prazer trabalhar com você!',
                    showConfirmButton: true,
                    background: '#191a19',
                    color: '#fff',
                    confirmButtonColor: '#117911',
                    backdrop: `
                        rgba(54, 55, 54,0.4)
                    `
                })
            })
            .catch(error => {
            console.log(error);
            });
        
        event.target.reset();
    }
    

    return (
        <section name='Contato' className='relative w-full md:h-screen p-4 text-white h-unset'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Contato</h2>
                    <p className='py-6'>Envie um email e vamos conversar!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input 
                        type="text" 
                        name='name' placeholder='Digite seu nome' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required/>

                        <input 
                        type="email" 
                        name='email' placeholder='Digite seu email' 
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required />

                        <textarea name="message" rows="10" placeholder='Digite sua message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required></textarea>

                        <button className='text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Vamos conversar!</button>
                       <div className='relative flex justify-center'>
                            <Link to='/' onClick={() => scrollTo(0)} className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end hover:scale-110 duration-300 mb-10'>
                                <span className=''><i className='bx bx-Home-heart mr-2'></i></span>
                                Retornar
                            </Link>
                        </div> 
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contato