
import { SongSlider } from '.';
const Home = ({ setPlayerState, playerState, setActiveSong, activeSong, canciones }) => {
    return (
        <SongSlider setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} canciones={canciones} />
    )
}
export default Home;
