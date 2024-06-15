
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const transition = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] };

const musicCard = ({ playerState, key, cancion, setActiveSong, activeSong, setPlayerState }) => {
    return (
        <div key={key} className='max-h-fit min-h-[280px] h-fit w-fit min-w-[224px] max-w-[224px] flex flex-col overflow-clip '>
            <div className="overflow-hidden min-w-56 min-h-56 max-h-56 max-w-56 z-10 relative flex justify-center items-center">
                <motion.img className="blur absolute top-0 left-0 h-56" src={cancion.cover} alt={`song: ${cancion.songid} - ${cancion.authorid}`} />
                <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center'>
                    <motion.img
                        transition={transition}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        onClick={() => {
                            if (activeSong.url !== cancion.url) {
                                setActiveSong(cancion)
                                setPlayerState(prevState => ({
                                    ...prevState,
                                    playing: true
                                }))
                            } else {
                                setPlayerState(prevState => ({
                                    ...prevState,
                                    playing: !prevState.playing
                                }))
                            }

                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5, ...transition },
                        }}
                        className="shadow-lg cursor-pointer relative w-28  rounded-full "
                        src={cancion.cover}
                        alt={`innersong: ${cancion.name} - ${cancion.artistName}`} />

                </div>
                <svg className='z-10 fill-white w-10 pointer-events-none' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {
                        cancion.name === activeSong.name && playerState.playing && (
                            <g id="SVGRepo_iconCarrier">
                                <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" ></path>
                                <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" ></path>
                            </g>
                        )
                    }

                    {
                        (cancion.name !== activeSong.name || (cancion.name === activeSong.name && playerState.playing === false)) && (
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
                            </g>
                        )
                    }
                </svg>


            </div>
            <NavLink to={`/songs/${encodeURIComponent(cancion.name)}`}>
                <label className='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-semibold hover:font-black hover:underline'>{cancion.name}</label>
            </NavLink>
            <NavLink to={`/artists/${cancion.authorid}`}>
                <label className='max-w-min whitespace-nowrap text-nowrap cursor-pointer font-normal hover:font-semibold hover:underline'>{cancion.artistName}</label>
            </NavLink>
        </div>

    );
}
export default musicCard;