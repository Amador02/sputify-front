import '../assets/styles/search.css';
import React, { useEffect, useState } from 'react';

const SearchComp = ({ onSearch = (text) => { }, placeholder = "Buscar...", inputRef, onChange = (text) => { }, initialTextValue = '' }) => {
    const [searchTerm, setSearchTerm] = useState(initialTextValue);
    useEffect(() => { onChange(searchTerm) }, [searchTerm])
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };
    const clearText = (e) => {
        e.preventDefault();
        setSearchTerm('');
    }

    return (
        <form className='w-full' onSubmit={handleSubmit}>
            <div className="flex flex-row relative justify-center items-center w-fit h-fit bg-white rounded-lg">
                <button type='submit' className="relative left-2 p-1">
                    <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        className="w-5 h-5 text-black"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            strokeWidth="1.333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <input ref={inputRef} required={{}} id='search' type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}
                    className="bg-white outline-none border border-transparent text-neutral-900 placeholder-neutral-400 text-sm rounded-lg focus:ring-white  focus:border-transparent block w-64 p-2.5 checked:bg-emerald-500"
                    placeholder={placeholder} />
                <button type='button' className="relative mr-2" onClick={clearText}>
                    <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
    );
};
export default SearchComp;