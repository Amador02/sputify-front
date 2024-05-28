import { useState } from 'react';
import { LogoFull } from '../components/LogoSputify';
import Botton from './Botton'
import { NavLink } from 'react-router-dom';

const mainMenu = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='relative overflow-hidden'>
            <div className='w-full h-[100vh] flex flex-col items-center p-4 gap-4'>
                <NavLink to='/home'>
                    <LogoFull width='192px' />
                </NavLink>
                <label className='text-[2.25rem] font-semibold'>Registro de Usuario</label>
                <div className="relative flex w-96 flex-col rounded-xl bg-[#fff] bg-clip-border text-gray-700 shadow-md p-2">
                    <div className="flex flex-col gap-4 p-6">
                        {tf(setUsername, 'text', 'Nombre de Usuario')}
                        {tf(setEmail, 'mail', 'Correo')}
                        {tf(setPassword, 'password', 'Contraseña')}
                    </div>
                    <div className='items-center justify-center flex'>
                        <Botton onClick={() => {
                            alert(`Usuario: ${username} email: ${email}, password: ${password}`);
                        }} text='Regístrate' key='iniciar-sesion' svg={
                            <svg className='mr-2' width='24px' viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z"
                                    />
                                    <path
                                        d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z"
                                    />
                                </g>
                            </svg>
                        } />
                    </div>
                    <p
                        className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased"
                    >
                        ¿Ya tienes cuenta?
                        <NavLink to='/login' className='ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased'>
                            Iniciar Sesión
                        </NavLink>
                    </p>

                </div>
            </div>
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
export default mainMenu;

const tf = (setValue, type, placeholder) => {
    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input
                type={type}
                placeholder=""
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                onChange={(e) => setValue(e.target.value)}
            />
            <label
                className=" before:content[''] after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >{placeholder}</label>
        </div>
    )
}