import React, { useState } from 'react'
import Review from './Review'

function Productos() {

  const [showPopup, setShowPopup] = useState(true); // el estado inicial es falso, lo que significa que el pop-up no se muestra

  const handleButtonClick = () => {
    setShowPopup(true); // al hacer clic en la imagen, cambia el estado a verdadero para mostrar el pop-up
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2> Serums </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="/" className="group" onClick={handleButtonClick} >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src="https://m.media-amazon.com/images/I/61T15nxYDeL._AC_SL1500_.jpg" alt="Imagen" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>
          <a href="/" className="group" onClick={handleButtonClick} >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src="https://sallybeautymx.vtexassets.com/arquivos/ids/171891/24281000.jpg?v=637496563879570000" alt="Imagen"  className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nombre</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
          <a href="/" className="group" onClick={handleButtonClick}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src="https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dw3ef9a553/images/38531949/large/38531949_x1.jpg" alt="Imagen"  className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nombre</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>
          <a href="/" className="group" onClick={handleButtonClick}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src=" https://sallybeautymx.vtexassets.com/arquivos/ids/171917-1600-1600?v=637496563916970000&width=1600&height=1600&aspect=true" alt="Imgagen"  className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nombre</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
        </div>
      </div>
      {showPopup && <Review onClose={() => setShowPopup(true)} />}
    </div>
  )
}

export default Productos