import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import context from './context';

export default function Provider({ children }) {
    const [filmsList, setFilmsList] = useState([]);
    const [search, setSearch] = useState("");

    const value = useMemo(() =>
        ({ filmsList, setFilmsList, search, setSearch }),
        [filmsList, setFilmsList, search, setSearch]);


    return (
        <context.Provider
            value={value}
        >
            {children}
        </context.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};