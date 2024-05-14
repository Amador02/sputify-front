
import { SongSlider } from '.';
const Home = ({ setActiveSong, activeSong, canciones }) => {
    return (
        <SongSlider setActiveSong={setActiveSong} activeSong={activeSong} canciones={canciones} />
    )
}
export default Home;
