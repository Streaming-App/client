import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import context from '../../context/context';

export default function Filter() {
    const { search, setSearch } = useContext(context);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="search"
                placeholder="Search"
                onChange={handleChange}
                value={search}
            />
        </div>

    );
}



