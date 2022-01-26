
import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import AddHeroes from '../heroe/add-heroes';
import { ListHeroes } from '../heroe/list-heroes';

const GiphyExpert = () => {

    //...
    const api_key = 'jsPYkvN8AVCU7A1oXWsHf9gY2Qczc6cw';
    const limit = 12;
    const q = 'hola';

    return <>
            <div className="row" id="giphyExpertList">
                <div className="col-md-12">
                    <h2>GiphyExpert</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <AddHeroes limit={limit} api_key={api_key}/>
            </div>
         </>
}


export default GiphyExpert;