import React from 'react'

const unitModal = () => {
    return(
        <div className="flex justify-center items-center flex-col shadow-md max-w-md max-h-fit bg-white fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex flex-col px-8 py-8 items-center justify-center min-h-fit">
                <h1 class = " m-4 text-gray-700 font-bold font-rubik">Ruta #314572</h1>
                <h3 class = "m-4 text-gray-500 font-rubik ">Ingresa tus datos</h3>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                     <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Conductor</label>
                             <div class="mt-2">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                     </div>

                    <div class="sm:col-span-3">
                         <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Destino</label>
                            <div class="mt-2">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                             </div>
                    </div>

                    <div class="flex flex-col">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
                        <button class= " mt-2 bg-white border-2 px-4 py-2 rounded-md border-green-400">
                            <label class="text-green-400">Completo</label>
                        </button>
                        <button class= " mt-2 bg-white border-2 px-4 py-2 rounded-md border-red-400">
                        <label class="text-red-400">Incompleto</label>
                         </button>
                    </div>
                </div>
            </div>
                    <button class= "mb-4 w-2/3 mt-2 px-4 py-2 rounded-md bg-orange-400">
                        <label class="text-white font-semibold">Guardar cambios</label>
                    </button>
        </div>
    )
}

export default unitModal
