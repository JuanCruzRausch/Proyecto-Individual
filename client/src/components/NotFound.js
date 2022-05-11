import React from 'react'
import { ImgNotFound, PNotFound } from '../styles/CardContainer'
const NotFound = () => {
    return (
        <div>
            <PNotFound>¡No countries found!</PNotFound>
            <ImgNotFound alt="" src="https://images.vexels.com/media/users/3/207021/isolated/preview/9fd01ff8d90806eafe4f3978c0b95fa5-globo-terraqueo-colorido-trazo-de-icono.png"/>            
        </div>
    )
}

export default NotFound