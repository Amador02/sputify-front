import { useParams } from 'react-router-dom';

export default function SongDetail() {
    const { songid } = useParams();
    console.log({ songid })
    return (
        <div>
            <div className='w-full h-10 bg-black'>{songid}</div>
        </div>
    );
}