import { useState } from 'react';
import axios from 'axios'
import { SongSlider, Uploader } from '.';
const Home = ({ setPlayerState, playerState, setActiveSong, activeSong }) => {
    const [randoms, setRandoms] = useState([])
    const [canciones, setCanciones] = useState(
        [
            {
                song: "Happier",
                songid: "happier-000",
                author: "Marshmello",
                authorid: "marshmello-000",
                src: "/src/assets/imgs/album.jpeg",
                url: "https://www.youtube.com/watch?v=m7Bc3pLyij0"
            },
            {
                song: "Human",
                songid: "human-000",
                author: "Rag'n'Bone Man",
                authorid: "rag-n-bone-man-000",
                src: "/src/assets/imgs/aquellanoche.jpeg",
                url: "https://www.youtube.com/watch?v=L3wKzyIN1yk"
            },
            {
                song: "Piel Canela",
                songid: "piel-canela-000",
                author: "Carlos Vives",
                authorid: "carlos-vives-000",
                src: "/src/assets/imgs/pielcanela.jpeg",
                url: "https://www.youtube.com/watch?v=42Ph2v0NE7Y"
            },
            {
                song: "Volví a Nacer",
                songid: "volvi-a-nacer-000",
                author: "Carlos Vives",
                authorid: "carlos-vives-000",
                src: "/src/assets/imgs/pielcanela.jpeg",
                url: "https://www.youtube.com/watch?v=XSCL5Uo1h4M"
            },
            {
                song: "Te Pintaron Pajaritos",
                songid: "te-pintaron-000",
                author: "Yandar & Yostin",
                authorid: "yandar-yostin-000",
                url: "https://www.youtube.com/watch?v=3Kr4OHIhWis"
            },
            {
                song: "Una Vaina Loca",
                songid: "una-vaina-loca-000",
                author: "Fuego",
                authorid: "fuego-000",
                url: "https://www.youtube.com/watch?v=UdztftsoybQ"
            },
            {
                song: "Normal",
                songid: "normal-000",
                author: "Ferxxo",
                authorid: "fuego-000",
                url: "https://www.youtube.com/watch?v=oD5f55ohsc4",
                src: "/src/assets/imgs/felizcumple.webp"
            },
            {
                song: "Enamorado Tuyo",
                songid: "enamorado-tuyo-000",
                author: "Cuarteto de Nos",
                authorid: "cuarteto-de-nos-000",
                url: "https://www.youtube.com/watch?v=R5cbxTPZNL0",
                src: "/src/assets/imgs/enamoradotuyo.jpeg"
            }, {
                song: "SUPERMODEL",
                songid: "supermodel-000",
                author: "Måneskin",
                authorid: "ma-neskin-000",
                url: "https://www.youtube.com/watch?v=jODrVofka54",
            }, {
                song: "Muy Feliz (Remix)",
                songid: "muy-feliz-000",
                author: "Ñejo",
                authorid: "nejo-000",
                url: "https://www.youtube.com/watch?v=Bsr1qL3sv9w",
                src: "/src/assets/imgs/muyfeliz.jpeg"
            }, {
                song: "Agarrala Pegala Azotala",
                songid: "agarrala-pegala-000",
                author: "Trebol Clan",
                authorid: "trebol-clan-000",
                url: "https://www.youtube.com/watch?v=VnQ1mLNHJC0",
                src: "/src/assets/imgs/agarrala.png"
            }, {
                song: "1 Thing",
                songid: "1-thing-000",
                author: "Amerie",
                authorid: "amerie-000",
                url: "https://www.youtube.com/watch?v=bbqVg_23otg",
                src: "/src/assets/imgs/1thing.png"
            }
        ])
    axios.get('http://localhost:8080/songs/randomSongs').then(r => {
        setRandoms(r.data)
    }).catch(err => {
        console.log(err)
    })
    axios.get('http://localhost:8080/songs/userSongs').then(r => {
        setCanciones(r.data)
    }).catch(err => {
        console.log(err)
    })
    return (
        <div className='flex py-10 flex-col max-h-full w-full gap-2 items-center'>
            <label className='font-bold text-3xl'>Hecho para tí</label>
            <SongSlider setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} canciones={randoms} />
            <label className='font-bold text-3xl'>Tus canciones guardadas</label>
            <SongSlider setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} canciones={canciones} />
        </div>
    )
}
export default Home;
