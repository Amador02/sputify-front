import { NavLink } from 'react-router-dom';
import { animationControls, motion } from "framer-motion";

import '../assets/styles/leftnavbar.css'
export default function () {
    return (
        <div className="flex flex-col items-center justify-center rounded-r-[1rem] bg-[#233345] text-white">
            <ul className='h-full flex flex-col mt-8 mb-8 p-0 pl-4'>
                <motion.li animate={{}}>
                    <NavLink className='nav' to="/home">
                        <svg viewBox="0 0 24 24"><path d="m9.59,0.49c0.82,-0.66 2,-0.66 2.82,0l7.75,6.21c0.53,0.43 0.84,1.08 0.84,1.76l0,11.28c0,1.24 -1.01,2.25 -2.25,2.25l-2.5,0c-1.24,0 -2.25,-1.01 -2.25,-2.25l0,-6.5c0,-0.41 -0.34,-0.75 -0.75,-0.75l-4.5,0c-0.41,0 -0.75,0.34 -0.75,0.75l0,6.5c0,1.24 -1.01,2.25 -2.25,2.25l-2.5,0c-1.24,0 -2.25,-1.01 -2.25,-2.25l0,-11.28c0,-0.68 0.31,-1.33 0.84,-1.76l7.75,-6.21z" /></svg>
                        <span className="">Inicio</span>
                    </NavLink>
                </motion.li>
                <li>
                    <NavLink className='nav' to="/songs">
                        <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10,0a10,10 0 1 0 10,10a10,10 0 0 0 -10,-10zm0,13a3,3 0 1 1 3,-3a3,3 0 0 1 -3,3z" /></svg>
                        <span className="nav-text">Canciones</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav' to="/artists">
                        <svg width="20px" height="20px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="karaoke">
                            <path d="m13.75,1.25a4.18,4.18 0 0 0 -7.15,2.76l4.39,4.38a4.18,4.18 0 0 0 2.76,-7.14zm-10.38,7.4l-2.96,2.98a1.4,1.4 0 0 0 0,1.97l0.99,0.99a1.4,1.4 0 0 0 1.97,0l2.96,-2.97l2.96,-2.97l-2.96,-2.98l-2.96,2.97l0,0.01zm1.03,2.92l-0.98,-0.99l2.91,-2.91l0.99,0.99l-2.92,2.91z" />
                        </svg>
                        <span className="nav-text">Artistas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav' to="/feed">
                        <svg width="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M28.76,3.24C28.25,1.91,26.96,1,25.5,1C23.57,1,22,2.57,22,4.5c0,0.58,0.16,1.15,0.43,1.65l-2.86,2.86   C14.82,7.4,7.06,10.8,3.93,13.93c-3.9,3.9-3.9,10.24,0,14.14C5.88,30.02,8.44,31,11,31s5.12-0.98,7.07-2.92   c3.13-3.13,6.53-10.89,4.91-15.64l2.86-2.86C26.35,9.84,26.92,10,27.5,10c1.93,0,3.5-1.57,3.5-3.5C31,5.04,30.09,3.75,28.76,3.24z" > </path></svg>
                        <span>Alimentar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav' to="/search">
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                        </svg>
                        <span>Buscar</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}