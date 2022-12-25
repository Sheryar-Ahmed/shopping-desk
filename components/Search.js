import React from 'react';

const Search = ({query, setQuery}) => {
    return (
        <div className='w-full flex items-center justify-center mt-16'>
            <input
                className='p-2 w-5/6 border-2 border-emerald-400 outline outline-emerald-400 rounded-2xl'
                placeholder='Search...'
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
        </div>)
}

export default Search