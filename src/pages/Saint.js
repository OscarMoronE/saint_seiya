import React from 'react'
import { useParams } from 'react-router-dom';

const Saint = () => {
    const { saint } = useParams()
    const saintCapital = saint.substring(0, 1).toUpperCase() + saint.substring(1);

    return (
        <div className='single'>
            <img src={`${process.env.PUBLIC_URL}/caballeros/${saint}.png`} />
            <div>{saintCapital}</div>
        </div>
    )
}

export default Saint