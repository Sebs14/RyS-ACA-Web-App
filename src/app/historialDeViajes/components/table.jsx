"use client";
import { useState, useEffect } from "react";
import React from "react";
import Row from "./row";
import Link from "next/link";
import getFreights from "../../../services/fetchFreights";

const table = () => {
  const [freights, setFreights] = useState();

  const fetchFreights = async () => {
    const response = await getFreights();
    setFreights(response.data);

	console.log(freights)
  };

  useEffect(() => {
    fetchFreights();
  }, []);

  return (
    <div class="bg-white px-4 rounded-md w-full ">
      <div class=" flex items-center justify-between pb-6">
        <div className="relative ">
          <h2 class="text-gray-600 font-semibold font-rubik">
            Historial de rutas
          </h2>
          <div className="bg-[#4C3175] mt-2 flex w-[41px] h-[1px] absolute -left-8" />
        </div>
		<Link href={"/historialDeViajes/newViaje"} className=" p-2 bg-orange-600 rounded-md text-white font-medium text-md font-rubik">Crear nuevo viaje</Link>
      </div>
      <div className="">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 scroll-smooth lg:scroll-auto">
          <div class="inline-block min-w-full  rounded-lg  overflow-hidden">
            <table class="min-w-full leading-normal ">
              <thead className="font-rubik">
                <tr>
                  <th class="px-5 py-3 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    ID Unidad
                  </th>
                  <th class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    Placa
                  </th>
                  <th class="flex px-5 py-4  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    <div className="flex flex-col justify-center items-center mt-2">
                      <span>Toneladas</span>
                    </div>
                  </th>
                  <th class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    Conductor
                  </th>
                  <th class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
            <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div class="inline-flex w-full justify-between items-center mt-2 xs:mt-0">
                <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                <span class="text-xs xs:text-sm text-gray-900">Pagina 1</span>
                <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
