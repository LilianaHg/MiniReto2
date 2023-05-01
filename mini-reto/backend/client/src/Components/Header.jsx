import React from 'react'
import Botonsito from './Botonsito'

function Header({onButtonClick}) {
  return (
    <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="https://i.pinimg.com/564x/30/12/8f/30128fef8941605bcf6f7748184a9483.jpg" alt=""/>
                </a>
            </div>
            <Botonsito onButtonClick={onButtonClick}></Botonsito>
            <div className="hidden lg:flex lg:gap-x-12">
                <a href="/" className="text-sm font-semibold leading-6 text-gray-900"> </a>
                <a href="/" className="text-sm font-semibold leading-6 text-gray-900"> Company </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    </header>

        

  )
}

export default Header