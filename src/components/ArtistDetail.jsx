import { useParams } from 'react-router-dom';

export default function ArtistDetail() {
    const { id } = useParams();
    console.log({ id })
    return (
        <div>
            <div className='w-full h-10 bg-white'>{id}</div>
        </div>
    );
}