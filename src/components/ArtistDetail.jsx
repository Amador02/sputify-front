import { useParams } from 'react-router-dom';
import transicion from './transicion';
import axios from 'axios';
import SongSearchCard from '../cards/SongSearchCard';
import { useState } from 'react';

export default function ArtistDetail() {
    const { id } = useParams();
    console.log({ id })
    const [artist, setArtist] = useState()
    const name = decodeURIComponent(id);
    axios.get(`http://localhost:8080/artists/find?name=${name}`)
        .then(response => {
            if (response.status === 200) {
                setArtist(response.data);
            } else {
                console.log('Unexpected status code:', response.status);
            }
        })
        .catch(error => {
            if (error.response.status == 400) {
                alert(error.response.data)
            }
        });
    return (
        <div>
            {artist && (<div className='flex flex-col items-center p-4'>
                <label className='font-bold'>{artist.name}</label>
                <label>{artist.nationality}</label>
                <label>{artist.isBand}</label>
                <label className='pt-4'>Canciones</label>
                <div>{
                    artist.lstSongs.map(song => {
                        return (
                            <SongSearchCard cancion={song} />
                        )
                    })
                }</div>
            </div>)}
        </div>
    );
}