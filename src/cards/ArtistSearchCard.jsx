
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Boton from '../login/Botton'

const transition = { duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] };

const card = ({ artist }) => {
    const nav = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, ...transition },
            }}
            className="w-full h-24 bg-[#0d1825] rounded-full flex items-center pl-4 gap-3">
            <div className="flex flex-col justify-center items-center">
                <NavLink to={`/artists/${artist.name}`}>
                    <label classNam e='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-normal hover:font-semibold hover:underline'>{`Artista: ${artist.name}`}</label>
                </NavLink>
            </div>
            <div>|</div>
            <div className='text-nowrap'>{`Nacionalidad: ${artist.nationality}`}</div>
            <div>|</div>
            <div className='text-nowrap'>{`Cantidad Canciones: ${artist.lstSongs.length}`}</div>
            <div className='grow w-full h-full rounded-e-full p-4 flex justify-end'>
                <Boton text='Ver Info' style='wow-white' onClick={() => {
                    nav(`/artists/${encodeURIComponent(artist.name)}`)
                }} svg={
                    <svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                } />
            </div>
        </motion.div>
    );
}
export default card;