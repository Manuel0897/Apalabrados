import React, { useState } from 'react';
import { API, URL_CHARACTERS, URL_TEXTS, URL_NUMBERS } from '../../utils/constants/ROUTES'; 
import { getType, getValues } from '../../utils/functions';
import config from '../../config';
import './Home.css'

const Home = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const type = getType(input);

        if (type === 'convine') {
            setError('Valor invalido (convinaste números y letras');
            return;
        }

        const url = `${API}${
            type === 'number' ? URL_NUMBERS : type === 'text' ? URL_TEXTS : URL_CHARACTERS
        }`

        const body = await getValues(input, type);

        fetch(url, {
            method: 'POST',
            headers: config.headers,
            body
        })
            .then(response => response.json())
            .then(res => {
                setInput('');
                setError('')
            })
            .catch( console.log );
    }

    return (
        <div className="homePage">
            <h1>Apalabrados</h1>
            <h3>Vamos a clasificar palablas</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Ingresa una Palabla: </span>
                    <input type="text" value={input} onChange={handleChange} />
                </label>
                {error && <span className="error">{error}</span>}
                <button onClick={handleSubmit} type="submit" disabled={input.length < 1}>Enviar</button>
            </form>
        </div>
    );
}

export default Home;