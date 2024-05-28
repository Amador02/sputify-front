
import { SongSlider } from '.';
const Home = ({ setPlayerState, playerState, setActiveSong, activeSong, canciones }) => {
    return (
        <div className='flex py-10 flex-col max-h-full w-full gap-2 items-center'>
            <label className='font-bold text-3xl'>Hecho para tí</label>
            <SongSlider setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} canciones={canciones} />
            <label className='font-bold text-3xl'>Tu Próximo Descubrimiento</label>
            <SongSlider setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} canciones={canciones} />
        </div>
    )
}
export default Home;
