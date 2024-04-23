import transicion from './transicion';
import SearchTextField from './SearchTextfield';


const Search = () => {
    return transicion(
        newFunction
    );
}

export default Search;

function newFunction() {
    return (<div className='m-1 flex flex-col gap-1'>
        <label>Busqueda: </label>
        <SearchTextField />
    </div>);
}
