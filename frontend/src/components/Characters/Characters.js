import React, { useState, useEffect } from 'react';
import { API, URL_CHARACTERS } from '../../utils/constants/ROUTES';
import { Table } from '../Table';
import './Characters.css'

const Characters = () => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const url = `${API}${URL_CHARACTERS}`;
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setItems(res?.data || []);
            })
            .catch( console.log );
    }, []);

    console.log(items)

    return (
        <div className="charactersPage">
            <h1>Characters</h1>
            <Table content={items} />
        </div>
    );
}

export default Characters;