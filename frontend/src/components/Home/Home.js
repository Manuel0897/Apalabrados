import React, { useState } from 'react';
import { API, URL_CHARACTERS, URL_TEXTS, URL_NUMBERS } from '../../utils/constants/ROUTES'; 
import config from '../../config';
import './Home.css'

const Home = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const findDiff = (str1, str2) => { 
        let diff= "";
        str2.split('').forEach((val, i) => {
          if (val !== str1.charAt(i)) diff += val ;         
        });
        return diff;
      }

    const extractChar = (input) => {
        let match = input.replace(/[^a-zA-Z 0-9]/g, "");
        let char = findDiff(match, input)[0];
        
        return char;
    }

    const getAccumulated = async () => {
        const response = await fetch(`${API}${URL_NUMBERS}`);
        const res = await response.json();
        var dtos = res?.data || [];
        if (dtos.length > 0) return parseInt(dtos[dtos.length - 1]?.accumulated) || 0;
        else return 0;
    }

    const getType = () => {
        let letters = /^[A-Za-z]+$/;
        let numbers = /^[0-9]+$/;
        let lan = /^[0-9A-Za-z]+$/;
        if (input.match(letters)) return 'text';
        else if (input.match(numbers)) return 'number';
        else if (input.match(lan)) return 'convine';
        else return 'character';    
    }
    
    const getValues = async (input, type) => {
        if (type === 'number') {
            const accumulated = await getAccumulated();
            const numberBody =  {
                number: parseInt(input),
                accumulated: accumulated + parseInt(input)
            }
            return JSON.stringify(numberBody);
        }

        const body = type === 'text' ? {
            text: input,
            initial: input[0],
            final: input[input.length - 1]
        } : {
            character: extractChar(input)
        }

        return JSON.stringify(body);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const type = getType();

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