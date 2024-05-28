
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const transition = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] };

const card = ({ cancion }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, ...transition },
            }}
            className="w-full h-24 bg-[#0d1825] rounded-full flex items-center px-4 gap-4">
            <div className="w-20 h-20 group rounded-full flex items-center cursor-pointer " onClick={() => { }}>
                <img className="w-16 h-16 group-hover:scale-110 rounded-full transition-all pointer-events-none select-none" src={cancion.src} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <NavLink to={`/songs/${cancion.songid}`}>
                    <label className='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-semibold hover:font-black hover:underline'>{cancion.song}</label>
                </NavLink>
                <NavLink to={`/artists/${cancion.authorid}`}>
                    <label className='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-normal hover:font-semibold hover:underline'>{cancion.author}</label>
                </NavLink>
            </div>
            <div>|</div>
            <div>{cancion.duration}</div>
            <div>|</div>
            <div>{cancion.album}</div>
        </motion.div>
    );
}
export default card;