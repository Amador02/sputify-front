
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const transition = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] };

const card = ({ artist }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, ...transition },
            }}
            className="w-full h-24 bg-[#0d1825] rounded-full flex items-center px-4 gap-4">
            <div className="flex flex-col justify-center items-center">
                <NavLink to={`/artists/${artist.name}`}>
                    <label className='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-normal hover:font-semibold hover:underline'>{cancion.author}</label>
                </NavLink>
            </div>
            <div>|</div>
            <div>{artist.nacionality}</div>
            <div>|</div>
            <div>{artist.songs.length}</div>
        </motion.div>
    );
}
export default card;