import { API, URL_NUMBERS } from '../constants/ROUTES';

export const findDiff = (str1, str2) => { 
    let diff= "";
    str2.split('').forEach((val, i) => {
        if (val !== str1.charAt(i)) diff += val ;         
    });
    return diff;
    }

export const extractChar = (input) => {
    let match = input.replace(/[^a-zA-Z 0-9]/g, "");
    let char = findDiff(match, input)[0];
    
    return char;
}

export const getAccumulated = async () => {
    const response = await fetch(`${API}${URL_NUMBERS}`);
    const res = await response.json();
    var dtos = res?.data || [];
    if (dtos.length > 0) return parseInt(dtos[dtos.length - 1]?.accumulated) || 0;
    else return 0;
}

export const getType = (input) => {
    let letters = /^[A-Za-z]+$/;
    let numbers = /^[0-9]+$/;
    let lan = /^[0-9A-Za-z]+$/;
    if (input.match(letters)) return 'text';
    else if (input.match(numbers)) return 'number';
    else if (input.match(lan)) return 'convine';
    else return 'character';    
}
    
export const getValues = async (input, type) => {
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