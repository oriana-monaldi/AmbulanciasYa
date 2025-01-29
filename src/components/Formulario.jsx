import React, { useState } from 'react';
import { Phone, MapPin, AlertCircle, User, Loader2, CheckCircle2, PhoneCall } from 'lucide-react';
import Boton from './Boton';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [paraMi, setParaMi] = useState('Es para mí');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const enviarDatos = async () => {
        if (paraMi === 'Es para mí') {
            if (!nombre.trim() || !telefono.trim()) {
                setError('Complete todos los campos obligatorios');
                return;
            }
        }
        
        if (!direccion.trim() || !descripcion.trim()) {
            setError('Complete todos los campos obligatorios');
            return;
        }

        const formData = {
            ...(paraMi === 'Es para mí' && {
                nombre: nombre,
                telefono: telefono
            }),
            direccion,
            descripcion
        };

        setIsLoading(true);
        setSuccess(false);

        try {
            const response = await fetch('https://ambulanciaya.onrender.com/ambulancias/solicitar', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error en el servidor');
            }

            setResponseMessage(data.message || 'Solicitud procesada');
            
            setNombre('');
            setTelefono('');
            setDireccion('');
            setDescripcion('');
            setError('');
            
            setIsLoading(false);
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
                setResponseMessage('');
            }, 3000);

        } catch (err) {
            setError(err.message || 'Error al enviar la solicitud');
            console.error('Error:', err);
            setIsLoading(false);
        }
    };

    return (
        <>
            {(isLoading || success) && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                    {/* Loader de procesamiento */}
                    {isLoading && (
                        <div className="flex flex-col items-center space-y-6">
                            <div className="relative">
                                <Loader2 className="w-16 h-16 text-red-600 animate-spin" />
                                <PhoneCall className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-xl font-semibold text-gray-800 animate-pulse">
                                Procesando su solicitud de emergencia...
                            </p>
                        </div>
                    )}

                    {/* Loader de éxito con ambulancia */}
                    {success && (
                        <div className="flex flex-col items-center space-y-6">
                            <div className="w-48 h-24 relative">
                                <div className="ambulance-loader"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <p className="text-xl font-semibold text-gray-800">
                                    {responseMessage || 'Ambulancia en camino'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Formulario principal */}
            <div className="m-2 flex items-center justify-center bg-neutral-200">
                <div className="w-full max-w-4xl min-h-[650px] overflow-hidden rounded-lg bg-white pb-2 shadow-lg">
                    <div className="bg-red-600 p-6 text-white">
                        <h2 className="text-center text-3xl font-bold">Solicitar Ambulancia</h2>
                    </div>
                    <div className="space-y-4 p-4">
                        <div className="flex justify-center gap-6">
                            <div className="flex items-center">
                                <input
                                    name="paraMi"
                                    id="paraMiSi"
                                    type="radio"
                                    value="Es para mí"
                                    checked={paraMi === 'Es para mí'}
                                    onChange={(e) => setParaMi(e.target.value)}
                                    className="hidden"
                                />
                                <label htmlFor="paraMiSi" className="flex items-center cursor-pointer">
                                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full mr-2 flex justify-center items-center">
                                        {paraMi === 'Es para mí' && <div className="w-3 h-3 bg-red-600 rounded-full"></div>}
                                    </span>
                                    Es para mí
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    name="paraMi"
                                    id="paraMiNo"
                                    type="radio"
                                    value="No es para mí"
                                    checked={paraMi === 'No es para mí'}
                                    onChange={(e) => setParaMi(e.target.value)}
                                    className="hidden"
                                />
                                <label htmlFor="paraMiNo" className="flex items-center cursor-pointer">
                                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full mr-2 flex justify-center items-center">
                                        {paraMi === 'No es para mí' && <div className="w-3 h-3 bg-red-600 rounded-full"></div>}
                                    </span>
                                    No es para mí
                                </label>
                            </div>
                        </div>

                        {paraMi === 'Es para mí' && (
                            <>
                                <div>
                                    <label className="mb-1 block font-medium text-gray-700" htmlFor="nombre">
                                        Nombre Completo
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" size={20} />
                                        <input
                                            id="nombre"
                                            type="text"
                                            pattern="[A-Za-záéíóúñÁÉÍÓÚÑ\s]+"
                                            className="w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 focus:border-red-500 focus:outline-none"
                                            placeholder="Pedro Martinez"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1 block font-medium text-gray-700" htmlFor="telefono">
                                        Teléfono
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" size={20} />
                                        <input
                                            id="telefono"
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            className="w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 focus:border-red-500 focus:outline-none"
                                            placeholder="2215689764"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            maxLength={10}
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <label className="mb-1 block font-medium text-gray-700" htmlFor="direccion">
                                Dirección
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" size={20} />
                                <input
                                    id="direccion"
                                    type="text"
                                    className="w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 focus:border-red-500 focus:outline-none"
                                    placeholder="Calle 30 nro 1787"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block font-medium text-gray-700" htmlFor="descripcion">
                                Descripción de la emergencia
                            </label>
                            <div className="relative">
                                <AlertCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                                <textarea
                                    id="descripcion"
                                    className="h-20 w-full resize-none rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 focus:border-red-500 focus:outline-none"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-center mb-4">
                                {error}
                            </div>
                        )}

                        <div className="mt-2 flex justify-center">
                            <Boton 
                                nombre="Solicitar Ambulancia"
                                onClick={enviarDatos}
                                showAlert={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Formulario;