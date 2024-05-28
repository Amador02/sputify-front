import { Spotify, Person } from '../assets/svgs';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/header.css'
import { useEffect, useState } from 'react';

const menusUsuario = [
    {
        id: 'home',
        name: 'Inicio',
        path: '/home',
    },
    {
        id: 'search',
        name: 'Buscar',
        path: '/search',
    },
    {
        id: 'songs',
        name: 'Canciones',
        path: '/songs',
    },
    {
        id: 'artists',
        name: 'Artistas',
        path: '/artists',
    }
]

const menusAdmin = [
    {
        id: 'home',
        name: 'Inicio',
        path: '/home',
    },
    {
        id: 'see',
        name: 'Consultas',
        path: '/see',
    },
    {
        id: 'songs',
        name: 'Gestion',
        path: '/management',
    },
]
function header({ setLoggedIn, esUsuario = true }) {
    const location = useLocation();
    const [menus, setMenus] = useState(menusAdmin);
    useEffect(() => {
        if (esUsuario) {
            setMenus(menusUsuario)
        } else {
            setMenus(menusAdmin)
        }
    }, [esUsuario])
    return (
        <div className='z-10 bg-[#080e16] p-3 flex flex-row items-center justify-center'>
            <div className='h-10 w-fit flex flex-row items-end grow'>
                <NavLink to="/home" className='p-0 h-10 '>
                    <img className='pl-5 w-full h-full pr-5 ' src={Spotify} alt="spotify" />
                </NavLink>
            </div>

            <div className='h-full flex gap-1 mr-2'>
                {
                    menus.map(e => (
                        <NavLink to={e.path} className='nav' key={e.id}>
                            {
                                location.pathname.startsWith(e.path) && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute max-w-40 max-h-40 inset-0 z-10 bg-white mix-blend-difference rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )
                            }
                            <span>{e.name}</span>
                        </NavLink>
                    ))
                }
            </div>
            <label className='text-2xl'>
                |
            </label>
            <NavLink to="/" onClick={() => setLoggedIn(logged => !logged)} className='ml-3 w-100 h-max border-4 bg-white relative mx-auto rounded-full overflow-hidden'>
                <img className='w-10 h-full' src={Person} alt="spotify" />
            </NavLink>
        </div>
    );
}
export default header;