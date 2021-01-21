import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className="pa3 ba b--green bg-light-blue"
                type="search" 
                placeholder="search name" 
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox