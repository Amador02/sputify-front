import '../assets/styles/search.css';
import React, { useEffect, useState } from 'react';

const SearchComp = ({ onSearch = (text) => { }, placeholder = "Buscar...", inputRef, onChange = (text) => { }, initialTextValue = '', types = [] }) => {
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
            <div className="flex flex-row relative justify-center items-center w-full h-fit bg-white rounded-lg">
                <input list='datalisttf' ref={inputRef} required={{}} id='search' type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}
                    className="grow bg-white outline-none border border-transparent text-neutral-900 placeholder-neutral-400 text-sm rounded-lg focus:ring-white  focus:border-transparent block w-full p-2.5 [&::-webkit-calendar-picker-indicator]:opacity-0"
                    placeholder={placeholder} />
                <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                    </svg>
                </span>
            </div>
            <datalist id='datalisttf' className='w-20 h-20'>
                {
                    types.map(e => (
                        <option value={e}>{e}</option>
                    ))
                }
            </datalist>
        </form>
    );
};
export default SearchComp;