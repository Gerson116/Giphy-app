
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useFetchGiphy from '../../hooks/useFetchGiphy';
import { ListHeroes } from './list-heroes';

const AddHeroes = ({limit, api_key}) => {
    //...
    const [inputValue, setInputValue] = useState('hola');

    const root = document.getElementById('giphyExpertList');

    const txtHeroe = (e) => {
        //...
        setInputValue( inputValue => inputValue = e.target.value );
        if(e.target.value === ''){
            localStorage.setItem('inputValue', '')
        }
    }

    const notSubmit = (e) => {
        //...
        e.preventDefault();
        if(inputValue === ''){
            alert('No se aceptan valores nulos');
        }
        else{
            //...
        }
    }
    
    return <>
            <div className="col-md-12">
                <form onSubmit={ notSubmit }>
                    <div className="form-group">
                        <input
                            type="text" 
                            placeholder='Escribe el nombre del heroe o serie'
                            onChange={ txtHeroe }
                            id='txtHeroe'
                            className='form-control'
                            autoComplete='off'
                            title='Haga enter para agregar el input'
                        />
                    </div>
                </form>
            </div>
            <ListHeroes limit={limit} q={inputValue} api_key={api_key}/>
            </>
}

AddHeroes.propTypes = {
}

export default AddHeroes;