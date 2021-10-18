import React, { useState, useEffect } from 'react';
import { API, URL_TEXTS } from '../../utils/constants/ROUTES';
import { Table } from '../Table';
import './Texts.css'

const Texts = () => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const url = `${API}${URL_TEXTS}`;
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setItems(res?.data || []);
            })
            .catch( console.log );
    }, []);

    console.log(items)

    return (
        <div className="textsPage">
            <h1>Texts</h1>
            <Table content={items} />
        </div>
    );
}

export default Texts;