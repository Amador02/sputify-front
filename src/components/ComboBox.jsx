import '../assets/styles/search.css';
import React, { useEffect, useState } from 'react';

const SearchComp = ({ onSearch = (text) => { }, placeholder = "Buscar...", inputRef, onChange = (text) => { }, initialNumberValue = 0, types = [] }) => {

    let value = undefined
    if (types[0]) value = types[0]
    const [searchTerm, setSearchTerm] = useState(value);
    useEffect(() => { onChange(searchTerm) }, [searchTerm])
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row relative justify-center items-center w-fit h-fit bg-white rounded-lg">
                <datalist id='datalist-tf' className='w-20 h-20'>
                    {
                        types.map(e => (
                            <option value={e}>{e}</option>
                        ))
                    }
                </datalist>
            </div>
        </form>
    );
};
export default SearchComp;