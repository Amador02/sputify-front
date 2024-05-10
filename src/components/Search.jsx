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

export default Search;
