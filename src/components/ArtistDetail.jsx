import { useParams } from 'react-router-dom';
import transicion from './transicion';

export default function ArtistDetail() {
    const { id } = useParams();
    console.log({ id })
    return (
        <div>
            <div className='w-[100vw] h-full bg-black'>Hola</div>
        </div>
    );
}