"use client";
import React from 'react'
import { useState, useEffect } from 'react'

const Sidebar = ({historialPage, unidadesPage, conductoresPage }) => {

    const [historial, isHistorial] = useState(false);
    const [unidades, isUnidades] = useState(unidadesPage);
    const [conductores, isConductores] = useState(conductoresPage);

    useEffect(() => {
        isHistorial(historialPage)
        isUnidades(unidadesPage)
        isConductores(conductoresPage)
    }, [])
    
  return (
    <aside className="flex flex-col w-64 h-[92vh] px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-6 ">
                <div className="space-y-3 ">
                    <label className="px-3 text-xs text-gray-500 uppercase">analytics</label>
                    { historial === true ? (
                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700" href="#">
                            

                            <span className="mx-2 text-sm font-medium">Historial de viajes</span>
                        </a>
                    ) : (
                        <a className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700" href="#">
                            

                            <span className="mx-2 text-sm font-medium">Historial de viajes</span>
                        </a>
                    )

                    }

                    <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 hover:text-gray-700" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>

                        <span className="mx-2 text-sm font-medium">Unidades</span>
                    </a>

                    <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 hover:text-gray-700" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>

                        <span className="mx-2 text-sm font-medium">Conductores</span>
                    </a>
                </div>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar