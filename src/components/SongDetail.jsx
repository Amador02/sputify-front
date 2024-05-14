import { useParams } from 'react-router-dom';
import transicion from './transicion';
import { getColor } from 'color-thief-react'
import { useState } from 'react';

function SongDetail({ canciones, activeSong, playerState, setPlayerState, setActiveSong }) {
    const { songid } = useParams();
    const c = canciones.find(ca => ca.songid === songid);
    const [color, setColor] = useState("#122133")
    if (c && c.src)
        getColor(c.src, "hex").then(cc => {
            setColor(cc)
        }).catch((e) => { console.error(e); });
    return (
        <div>
            {
                !c && (
                    <label>No se cargó la canción de id: {songid}</label>
                )
            }
            {
                c && (
                    <div className="h-full">
                        <div className="flex flex-col justify-center items-center">
                            <div className='w-screen pb-1 overflow-hidden'>
                                <div style={{ background: `linear-gradient(${color}, transparent)` }} className='relative flex items-center justify-top p-3 flex-col'>
                                    <div className='relative'>
                                        <img className="w-40 h-40 transition-all ease-in-out bg-black hover:scale-[1.05] active:scale-[0.95] rounded-xl shadow-md cursor-pointer "

                                            src={c.src} alt="" onClick={() => {
                                                if (activeSong.songid !== c.songid) {
                                                    setActiveSong(c)
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
                                            }} />
                                        <div className='absolute overflow-hidden top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center'>
                                            <svg
                                                className='w-8 z-10  fill-white pointer-events-none shadow-2xl'
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {
                                                    c.songid === activeSong.songid && playerState.playing && (
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" ></path>
                                                            <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" ></path>
                                                        </g>
                                                    )
                                                }

                                                {
                                                    (c.songid !== activeSong.songid || (c.songid === activeSong.songid && playerState.playing === false)) && (
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
                                                        </g>
                                                    )
                                                }
                                            </svg>
                                        </ div>

                                    </div>
                                </div>
                            </div>
                            <label className='pt-2 font-semibold'>{c.song}</label>
                            <label>{c.author}</label>

                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SongDetail;