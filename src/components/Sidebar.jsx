"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import {faArrowTrendUp, faCaravan, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Sidebar = ({historialPage, unidadesPage, conductoresPage, user }) => {

    useEffect(() => {
        const user = localStorage.getItem("Correo");
    }, [])
    
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l shadow-md">
        <div className="flex flex-col justify-between flex-1 mt-6">
           
            <nav className="-mx-3 space-y-6 ">
                <div className="space-y-3 ">
                    { user === "conductor" ? 
                        (
                            <a className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700" href="/historialDeViajes">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faArrowTrendUp}/></span>    
                                <span className="mx-2 text-sm font-medium">Historial de viajes</span>
                            </a>
                        ) : (
                            <>
                            { historialPage === false ? (
                                <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700" href="/historialDeViajes">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faArrowTrendUp}/></span>  
                                    <span className="mx-2 text-sm font-medium">Historial de viajes</span>
                                </a>
                            ) : (
                                <a className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700" href="/historialDeViajes">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faArrowTrendUp}/></span>    
                                    <span className="mx-2 text-sm font-medium">Historial de viajes</span>
                                </a>
                            )

                            }

                            { unidadesPage === false ? (
                                <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 hover:text-gray-700" href="/unidades">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faCaravan}/></span>    
                                    <span className="mx-2 text-sm font-medium">Unidades</span>
                                </a>
                            ) : (
                                <a className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700" href="/unidades">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faCaravan}/></span>    
                                    <span className="mx-2 text-sm font-medium">Unidades</span>
                                </a>
                            )

                            }

                            { conductoresPage === false ? (
                                <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 hover:text-gray-700" href="/conductores">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faPersonRunning}/></span>     
                                    <span className="mx-2 text-sm font-medium">Conductores</span>
                                </a>
                            ) : (
                                <a className="flex items-center px-3 py-2  transition-colors duration-300 transform rounded-lg  bg-gray-100 text-gray-700" href="/conductores">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><FontAwesomeIcon className="text-indigo-950" icon={faPersonRunning}/></span>     
                                    <span className="mx-2 text-sm font-medium">Conductores</span>
                                </a>
                            )

                            }
                            </>
                        )
                    }
                </div>
            </nav>
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="border border-[#4C3175] rounded-full overflow-hidden bg-[#F2EBD8] p-1 border-spacing-3">
                    <Image
                        src="/company.jpg"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <p className="font-rubik font-semibold">{user}</p>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar