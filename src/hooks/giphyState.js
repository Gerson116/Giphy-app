import { useState } from 'react';
import useFetchGiphy from './useFetchGiphy';

export const giphyState = ({value}) =>{
    //...
    const [state, setState] = useState([]);

    if(value != ''){
        //...
        setState( state => [...state, ...value] );
    }
    return state;
}