import { useState } from "react";


const ListHeroesServices = ({ setHeroes }) => {
    //...
    const listHeroes = async (api_key, url) => {
        //....
        try {
            let getHeroe = await fetch(url);
            let response = await getHeroe.json();
            let data = response.data.map( img => {
                return {
                            'id': img.id,
                            'type': img.type,
                            'username': img.username,
                            'user': img.user,
                            'images': img.images.downsized_medium,
                            'title': img.title
                       }
            });
            //  La razon por la que llamo el index 0, es porque al agregar el json en el arreglo. Se guardo un arreglo dentro de otro.
            setimagesGiphy( imagesGiphy => [...imagesGiphy, ...data] );
        } catch (error) {
            console.error('Error al realizar la solicitud');
        }
    }
}

export default ListHeroesServices;