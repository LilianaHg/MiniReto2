import React,{ useState } from 'react'


function DropDown({onButtonClick}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="relative">
                    <button id="menu-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-haspopup="true" type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" >
                        Categorias de Productos
                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div>
                            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src="https://i.pinimg.com/564x/30/12/8f/30128fef8941605bcf6f7748184a9483.jpg" alt="Imagen" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <button onClick={()=> onButtonClick('Serums')} className="block font-semibold text-gray-900">
                                                    Serums
                                                    <span className="absolute inset-0"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src="https://i.pinimg.com/564x/4d/1c/13/4d1c130da06d741128d7dcce9d71af32.jpg" alt="Imagen" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <button onClick={()=> onButtonClick('Cremas')}  className="block font-semibold text-gray-900">
                                                    Cremas
                                                    <span className="absolute inset-0"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src="https://i.pinimg.com/564x/d8/9b/6d/d89b6deb3590c496c6370e75e89fed22.jpg" alt="Imagen" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <button onClick={()=> onButtonClick('Bloqueadores')}  className="block font-semibold text-gray-900">
                                                    Bloqueadores
                                                    <span className="absolute inset-0"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src="https://i.pinimg.com/564x/ad/b3/aa/adb3aafae0dd5691f888c6130179a0a7.jpg" alt="Imagen" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <button onClick={()=> onButtonClick('Mascarillas')}  className="block font-semibold text-gray-900">
                                                    Mascarillas
                                                    <span className="absolute inset-0"></span>
                                                </button>
                                            </div>
                                            </div>
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <img src="https://i.pinimg.com/564x/e3/99/8e/e3998e62fab05511443294e0d0c5752a.jpg" alt="Imagen" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <button onClick={()=> onButtonClick('Limiadores')}  className="block font-semibold text-gray-900">
                                                    Limpiadores
                                                    <span className="absolute inset-0"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )}
                </div>
    </div>
  )
}

export default DropDown