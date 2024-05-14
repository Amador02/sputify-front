import transicion from './transicion';
import SearchTextField from './SearchTextfield';


const Search = ({setVideoUrl}) => {
    return (<div className='m-1 flex flex-col gap-1'>
        <label>Busqueda: </label>
        <SearchTextField onSearch={(t) => {
            setVideoUrl(t)
        }} />
    </div>);
}

function getYouTubeVideoId(url) {
    // Regex pattern to match YouTube video ID in various URL formats
    var pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    var match = url.match(pattern); // Match the URL against the pattern
    if (match) {
        return match[1]; // Return the extracted video ID
    }
    return null; // Return null if no match found
}


export default Search;
