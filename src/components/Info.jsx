import React from 'react'
import { AppContext } from '../App'

 const Info = ({title, image, descriptoin}) => {
    const {setDrawerOpened} = React.useContext(AppContext)

    return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} height={120} src={image} alt="emptyCart" />
        <h2>{title}</h2>
        <p className="opacity-6 align-center">{descriptoin}</p>
        <button onClick={() => setDrawerOpened(false)} className="greenButton">
            <img src="img/arrow.svg" alt="Arrow" />
            Вернуться назад
        </button>
    </div>
  )
}

export default Info
