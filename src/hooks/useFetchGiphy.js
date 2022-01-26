
import React, {useRef, useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

const useFetchGiphy = (url) => {
    //...

    const status = useRef(true);

    const [response, setResponse] = useState({ data: null, loading: status.current, error: null });
    const objResponse = { data: null, loading: true, error: null };

    useEffect(()=>{
        //...
        console.log('me estoy ejecutando multiples veces.');
        return () =>{
            console.log('Se desmonto.');
            status.current = false;
        }
    }, [status]);

    useEffect(() =>{
        //...
        status.current = true;
        const fetchGetGiphy = async () => {
            try{
                let resp = await fetch(url);
                let result = await resp.json();

                setResponse({
                    loading: false,
                    error: null,
                    data: result.data
                });
            }catch(error){
                console.log('ocurrio un error al hacer la peticion');
            }
        }
        fetchGetGiphy();
    }, [url]);

    if(response.data != null &&  !response.loading){
        return response;
    }
    return response;
}

export default useFetchGiphy;