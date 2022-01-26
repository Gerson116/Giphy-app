
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useFetchGiphy from '../../hooks/useFetchGiphy';
import '../../index.css';

export const ListHeroes = ({limit, q = 'hola', api_key}) => {
    //....
    let url = '';
    url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${api_key}`;
    
    const {loading, error, data} = useFetchGiphy(url);
    const datos = !!data && [...data];
    const dataDTO = Object.values(datos); // De esta manera se mapean los valores de un objeto.

    return  dataDTO.map(items =>
                <div className="card mt-2 col-md-3" key={ items.id } id="cardsGiphy">
                    <img src={ items.images.downsized_large.url } className="card-img-top " alt="imagen" />
                    <div className="card-body">
                        <p className="card-text">{ items.title }</p>
                    </div>
                </div>
            )
                
};



ListHeroes.propTypes = {
    limit: PropTypes.number.isRequired,
    api_key: PropTypes.string.isRequired
}