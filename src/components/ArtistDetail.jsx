import { useParams } from 'react-router-dom';
import transicion from './transicion';

function ArtistDetailComp() {
    const { id } = useParams();
    console.log({ id })
    return (
        <div>
            <div className='w-full h-10 bg-white'>{id}</div>
        </div>
    );
}
const ArtistDetail = () => {
    return transicion(ArtistDetailComp);
}

export default ArtistDetail;