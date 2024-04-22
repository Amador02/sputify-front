import { useParams } from 'react-router-dom';
import transicion from './transicion';

function SongDetailComp() {
    const { songid } = useParams();
    console.log({ songid })
    return (
        <div>
            <div className='w-full h-10 bg-black'>{songid}</div>
        </div>
    );
}

const SongDetail = () => {
    return transicion(SongDetailComp);
}



export default SongDetail;