import axios from 'axios';
import { useState } from 'react';
import SongSearchCard from '../cards/SongSearchCard'

const canciones = () => {
    const [optionSelected, setOptionSelected] = useState(false);
    const [songs, setSongs] = useState([
        {
            song: "Happier",
            songid: "happier-000",
            author: "Marshmello",
            authorid: "marshmello-000",
            src: "/src/assets/imgs/album.jpeg",
            url: "https://www.youtube.com/watch?v=m7Bc3pLyij0",
            album: 'Single',
            duration: '3:54'
        },
        {
            song: "Happier",
            songid: "happier-0001",
            author: "Marshmello",
            authorid: "marshmello-000",
            src: "/src/assets/imgs/album.jpeg",
            url: "https://www.youtube.com/watch?v=m7Bc3pLyij0",
            album: 'Single',
            duration: '3:54'
        },
    ]);
    return (
        <div className='w-full h-full'>
            {
                !optionSelected && (
                    <div className='p-4 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 1-5-xl:grid-cols-7 2xl:grid-cols-8 gap-x-5 gap-y-5 w-fit h-fit'>
                        {
                            opciones.map((opcion) => {
                                return (
                                    <div key={opcion.nombre} className='relative hover:scale-105 transition-all cursor-pointer text-lg select-none font-bold w-44 h-44 rounded-lg p-4' style={{ background: opcion.color }}
                                        onClick={() => {
                                            if (!opcion.getFav) {
                                                axios.get(`http://localhost:8080/songs/genre/${encodeURIComponent(opcion.nombrenf)}`)
                                                    .then(response => {
                                                        setSongs(response.data);
                                                        setOptionSelected(true)
                                                    })
                                                    .catch(error => {
                                                        alert('Error fetching songs by genre:' + error);
                                                    });
                                            } else {
                                                axios.get(`http://localhost:8080/songs/userSongs`)
                                                    .then(response => {
                                                        setSongs(response.data);
                                                        setOptionSelected(true)
                                                    })
                                                    .catch(error => {
                                                        alert('Error fetching songs of user:');
                                                    });
                                            }
                                        }}>
                                        <label>{opcion.nombre}</label>
                                        <div className='absolute bottom-2 right-2 w-16 h-16 rounded-lg overflow-hidden'>{opcion.svg}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                optionSelected && (
                    <div className='h-full flex flex-col p-4 gap-4'>
                        {
                            songs.map(song => {
                                return (<SongSearchCard cancion={song} />)
                            })
                        }
                    </div>
                )
            }
        </div>

    );
}

export default canciones;

const opciones = [
    {
        nombre: 'Tus Favoritas',
        nombrenf: 'favos',
        svg: <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"></path></svg>,
        color: '#1e3264',
        getFav: true
    },
    {
        nombre: 'Reggaetón',
        nombrenf: 'REGGAETON',
        svg: <></>,
        color: '#dc148c'
    },
    {
        nombre: 'Rock',
        nombrenf: 'ROCK',
        svg: <></>,
        color: '#0d73ec'
    },
    //ROCK, POP, PUNK, REGGAETON, ELECTRONICA
    {
        nombre: 'Pop',
        nombrenf: 'POP',
        svg: <></>,
        color: '#503750'
    },
    {
        nombre: 'Punk',
        nombrenf: 'PUNK',
        svg: <></>,
        color: '#e61e32'
    },
    {
        nombre: 'Electrónica',
        nombrenf: 'ELECTRONICA',
        svg: <></>,
        color: '#8e66ac'
    },
];