import SearchTextField from './SearchTextfield';
import NumberTextfield from './NumberTextfield';
import SearchTextfieldData from './SearchTextfieldData';
import SongSearchCard from '../cards/SongSearchCard';
import { motion } from 'framer-motion';
import Boton from '../login/Botton';
import Loader from './Loader'
import { useState } from 'react';


const Search = ({ setVideoUrl }) => {
    const [cantidadOr, setCantidadOr] = useState(2);
    const [cantidadAnd, setCantidadAnd] = useState(2);
    const [opened, setOpened] = useState(true);
    const [state, setState] = useState(undefined);
    const [showing, setShowing] = useState(true);
    const [arrayOr, setArrayOr] = useState([
        {
            type: 0,
            value: ''
        },
        {
            type: 0,
            value: ''
        }
    ]);
    const [arrayAnd, setArrayAnd] = useState([
        {
            type: 0,
            value: ''
        },
        {
            type: 0,
            value: ''
        }
    ]);
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

    const handleRemoveField = index => {
        const newArray = [...arrayOr];
        setArrayOr(newArray);
        setCantidadOr(cantidadOr - 1);
    };
    const handleRemoveFieldAnd = index => {
        const newArray = [...arrayAnd];
        setArrayAnd(newArray);
        setCantidadAnd(cantidadAnd - 1);
    };
    return (
        <div className='w-full h-full flex flex-row'>
            <div style={{ width: opened ? 'fit-content' : "0px" }} className='w-fit flex-col flex bg-[#0d1825] h-full max-h-full rounded-e-3xl overflow-x-visible p-4'>
                {(state === undefined) && (
                    <div className='flex-col grow flex items-center overflow-hidden gap-4'>
                        <label className='text-lg font-bold text-center'>Elige el Tipo de Búsqueda</label>
                        <div className='flex w-fit flex-row gap-4 justify-center'>
                            <Boton
                                onClick={() => setState('or')}
                                style='normal'
                                text='OR'
                                svg={<></>}
                            />
                            <Boton
                                onClick={() => setState('and')}
                                style='normal'
                                text='AND'
                                svg={<></>}
                            />
                        </div>
                    </div>
                )}
                {state === 'or' && (
                    generarBusqueda('Búsqueda OR', cantidadOr, arrayOr, setVideoUrl, setArrayOr, handleRemoveField, setCantidadOr, setState, setShowing)
                )}
                {state === 'and' && (
                    generarBusqueda('Búsqueda AND', cantidadAnd, arrayAnd, setVideoUrl, setArrayAnd, handleRemoveFieldAnd, setCantidadAnd, setState, setShowing)
                )}
            </div>
            <div className='bg-[#0d1825] rounded-e-full w-10 h-10 flex mt-10' onClick={() => setOpened(p => !p)}>
                <svg style={{ rotate: opened ? "-180deg" : "0deg" }} className='w-10 h-10 group-hover:scale-110 fill-white group-hover:fill-gray-400 transition-all  duration-300' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"></path>
                </svg>
            </div>
            <div className='grow w-full h-full flex flex-col'>
                {
                    (!songs) && (
                        <div className='flex flex-col h-full items-center justify-center font-bold text-xl'>
                            Usa la barra lateral para buscar
                        </div>
                    )
                }
                {
                    (songs) && (
                        <div className='relative w-full h-full flex flex-col gap-4 p-4'>
                            {songs.map(cancion => <SongSearchCard key={cancion.songid} cancion={cancion} />)}
                            <motion.div
                                className="bg-[#122133] absolute top-0 left-0 w-full h-full items-center justify-center flex transition-all duration-300 z-10"
                                style={{
                                    opacity: showing ? 1 : 0,
                                    pointerEvents: showing ? 'auto' : 'none'
                                }}
                                onClick={() => setShowing(p => !p)}>
                                <Loader />
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </div>);

}
const atributos = [
    'Nombre',
    'Genero',
    'Duración',
    'Año',
    'URL',
    'Nombre Album'
]

function generarBusqueda(text, cantidad, array, setVideoUrl, setArray, handleRemoveField, setCantidad, setState, setShowing) {
    return <div className='flex flex-col gap-1 items-center w-full h-full overflow-hidden'>
        {labelBusqueda(text, setState)}
        <div className='grow flex flex-col justify-center gap-2 overflow-y-auto overflow-x-hidden w-full h-full max-h-full'>
            {Array.from({ length: cantidad }, (_, index) => {
                return (
                    <div key={index} className='flex gap-2 items-center justify-normal'>
                        {(atributos[array[index].type] === 'Nombre' ||
                            atributos[array[index].type] === 'URL' ||
                            atributos[array[index].type] === 'Nombre Album'
                        ) && (<SearchTextField
                            placeholder={`Atributo ${index + 1}`}
                            onSearch={(t) => {
                                setVideoUrl(t);
                            }}
                            initialTextValue={array[index].value}
                            onChange={(t) => {
                                array[index].value = t;
                                setArray([...array]);
                            }} />)}
                        {(
                            atributos[array[index].type] === 'Año'
                        ) && (
                                (<NumberTextfield
                                    placeholder={`Atributo ${index + 1}`}
                                    onSearch={(t) => {
                                    }}
                                    onChange={(t) => {
                                        array[index].value = t;
                                        setArray([...array]);
                                    }} />)
                            )}
                        {(
                            atributos[array[index].type] === 'Genero'
                        ) && (
                                (<SearchTextfieldData
                                    placeholder={`Atributo ${index + 1}`}
                                    onSearch={(t) => {
                                    }}
                                    types={['Salsa', 'Merengue', 'Bachata', 'Reggaetón', 'Rock', 'Pop', 'Punk', 'Electrónica', 'Hip Hop', 'Jazz']}
                                    onChange={(t) => {
                                        array[index].value = t;
                                        setArray([...array]);
                                    }} />)
                            )}
                        {(
                            atributos[array[index].type] === 'Duración'
                        ) && (
                                (<SearchTextField
                                    placeholder={`0:00`}
                                    onSearch={(t) => {
                                    }}
                                    initialTextValue={array[index].value}
                                    onChange={(t) => {
                                        array[index].value = t;
                                        setArray([...array]);
                                    }} />)
                            )}
                        {/* De una Canción se necesita un código único (generado aleatoriamente), nombre de la canción,
                    nombre del álbum, carátula, año, duración, género (Rock, Pop, Punk, Reggaeton, Electrónica) y
                    url de la canción en youtube.
                    */}

                        <Boton
                            text={atributos[array[index].type]}
                            svg={<></>}
                            openHoverInfo={false}
                            style='normal'
                            onClick={() => {
                                array[index].type = (array[index].type + 1) % atributos.length;
                                setArray([...array]);
                            }} />
                        {index >= 2 && (<Boton
                            text=''
                            svg={<svg width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </svg>}
                            openHoverInfo={false}
                            style='normal'
                            onClick={() => handleRemoveField(index)} />)}
                    </div>
                );
            })}
        </div>
        <div className='items-center justify-center flex gap-2'>
            <Boton
                text='Buscar'
                style='normal'
                openHoverInfo={false}
                svg={svgSearch()}
                onClick={() => {
                    console.log(array);
                    setShowing(true)
                }} />
            <Boton
                text=''
                style='normal'
                openHoverInfo={false}
                svg={svgPlus()}
                onClick={() => {
                    array.push({
                        type: 0,
                        value: ''
                    });
                    setArray([...array]);
                    setCantidad(p => p + 1);

                }} />
        </div>
    </div>;
}

function labelBusqueda(text, setState) {
    return <div className='flex flex-row gap-4 items-center'>
        <svg className='hover:scale-110 bg-black fill-white hover:fill-gray-400 transition-all rounded-full p-2 rotate-180' onClick={() => setState(undefined)} width='48px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"></path>
            </g>
        </svg>
        <label className='font-bold text-xl justify-center text-nowrap'>{text}</label>
    </div>;
}

function svgPlus() {
    return <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>;
}

function svgSearch() {
    return <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
}
export default Search;
