import React, { useState, useEffect } from 'react';
import { API, URL_NUMBERS } from '../../utils/constants/ROUTES';
import { Table } from '../Table';
import './Numbers.css'

const Numbers = () => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const url = `${API}${URL_NUMBERS}`;
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setItems(res?.data || []);
            })
            .catch( console.log );
    }, []);

    console.log(items)

    return (
        <div className="numbersPage">
            <h1>Numbers</h1>
            <Table content={items} />
        </div>
    );
}

export default Numbers;