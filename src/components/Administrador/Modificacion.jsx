import React, {useState} from 'react';
import Boton from '../Boton';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

function Modificacion({tipo}) {
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const onClick = () => {
        Swal.fire({
            title: 'Se añadió correctamente!',
            icon: 'success',
            timer: 800,
            showConfirmButton: false,
        });
    };

    return (
        <div className="flex min-h-[calc(100vh-170px)] items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-5 text-center text-xl font-bold text-red-600">
                    Modificar datos de {tipo === 'ambulancia' ? 'ambulancia' : tipo === 'chofer' ? 'chofer' : tipo === 'accidente' ? 'accidente' : 'paramédico'}
                </h2>

                {tipo === 'ambulancia' && (
                    <>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Patente</label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-red-600 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="AB540UB"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">VTV</label>
                            <select className="w-full rounded-md border border-red-600 bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                <option value="" disabled>
                                    Seleccione una opción
                                </option>
                                <option value="alDia">Al día</option>
                                <option value="vencida">Vencida</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Seguro</label>
                            <select className="w-full rounded-md border border-red-600 bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                <option value="" disabled>
                                    Seleccione una opción
                                </option>
                                <option value="alDia">Al día</option>
                                <option value="vencido">Vencido</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Inventario</label>
                            <select className="w-full rounded-md border border-red-600 bg-white px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                <option value="" disabled>
                                    Seleccione una opción
                                </option>
                                <option value="completo">Completo</option>
                                <option value="incompleto">Incompleto</option>
                            </select>
                        </div>
                    </>
                )}

                {tipo === 'chofer' || tipo === 'paramedico' ? (
                    <>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Nombre Completo</label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-red-600 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Carlos Pérez"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">DNI</label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-red-600 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="44526325"
                            />
                        </div>
                    </>
                ) : null}

                {tipo === 'accidente' && (
                    <>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Dirección</label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-red-600 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                placeholder="Calle 30 nro 1787"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Descripción del accidente</label>
                            <textarea
                                className="min-h-[80px] w-full resize-y rounded-md border border-red-600 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                placeholder="Ingrese la descripción del accidente"
                            />
                        </div>
                    </>
                )}

                <div className="mt-6 text-center">
                    <Link to="/navAdmin">
                        <Boton nombre="Aceptar" onClick={onClick} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modificacion;
