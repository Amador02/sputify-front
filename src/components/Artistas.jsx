import SearchTextField from './SearchTextfield'
import Boton from '../login/Botton';
import Card from '../cards/ArtistSearchCard';
import { useState } from 'react';
import { useRef } from 'react';
const artistas = () => {
    const ref = useRef();
    const [searching, setSearching] = useState(false);
    const [artists, setArtists] = useState([]);
    return (
        <div className='w-full h-full p-4 flex items-center flex-col'>
            {
                searching &&
                (busqueda(setSearching, setArtists, artists, ref))
            }
            {
                !searching &&
                (
                    <Boton onClick={() => { setSearching(true) }
                    } text='Buscar Artistas' style='normal' svg={
                        <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    } />
                )
            }
            <div className='flex flex-col items-center pb-10 h-full w-full gap-2'>
                {
                    artists.map(each =>
                        (<div key={each.id}>{each.text}</div>)
                    )
                }
            </div>
        </div>
    )
}

const busqueda = (setSearching, setArtists, artists, ref) => {
    const search = (text) => {
        console.log({ text });
        artists.push({ text: text, id: (Math.random() + '') });
        setArtists(artists);

    }
    return (
        <div className='flex flex-row gap-2 items-center'>
            <SearchTextField
                inputRef={ref}
                onSearch={search} placeholder='Buscar Artistas por nombre...' />
            <Boton onClick={() =>
                search(ref.current.value)
            } text='Buscar' style='normal' svg={
                <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            } />
            <Boton onClick={() => { setSearching(false) }
            } text='Cancelar' style='normal' svg={
                <svg width="24px" fill="#fff" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-cancel"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 7V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15V2H17V3H18V4H19V5H20V7H21M17 6V5H16V4H14V3H8V4H6V5H7V6H8V7H9V8H10V9H11V10H12V11H13V12H14V13H15V14H16V15H17V16H18V14H19V8H18V6H17M14 16V15H13V14H12V13H11V12H10V11H9V10H8V9H7V8H6V7H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H15V16H14Z"></path></g></svg>
            } />
        </div>
    );
}
export default artistas;