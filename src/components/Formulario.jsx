import React, { useState } from 'react';
import Button from './Button';

function Formulario({ esLogin }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (esLogin) {
            console.log(`Iniciando sesión con email: ${email}`);
        } else {
            console.log(`Solicitando ambulancia para: ${nombre}, Teléfono: ${telefono}, Dirección: ${direccion}`);
        }
    };

    
    return (
        <div className="h-92 flex items-center justify-center"> 
            <form className="mt-4 w-80 p-4" onSubmit={handleSubmit}>
                {esLogin ? (
                    <div className='flex flex-col items-center'> 
                        <h2 className="text-center text-2xl text-red-500 mb-4">
                            <strong>Iniciar Sesión</strong>
                        </h2>
                        <div className='p-4' > 
                            <p className="text-lg">Email</p>
                            <input
                                type="email"
                                className="mt-2 w-full border-2 pb-1" 
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="mt-2 text-lg">Contraseña</p>
                            <input
                                type="password"
                                className="mt-2 w-full border-2 pb-1"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button nombre="Iniciar Sesión" />
                        </div>
                    </div>
                ) : (
                    <div>                            
                        <h2 className="text-center text-2xl text-red-500 mb-4">
                            <strong>Solicitar Ambulancia</strong>
                        </h2>
                        <p className="text-lg">Nombre Completo</p>
                        <input
                            className="mt-2 w-80 border-2 pb-1"
                            placeholder="Pedro Martinez"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <p className="mt-2 text-lg">Teléfono</p>
                        <input
                            className="mt-2 w-80 border-2 pb-1"
                            placeholder="2215689764"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        <p className="mt-2 text-lg">Dirección</p>
                        <input
                            className="mt-2 w-80 border-2 pb-1"
                            placeholder="Calle 30 nro 1787"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />
                        <p className="mt-2 text-lg">Descripción de la emergencia</p>
                        <textarea
                            className="mt-2 h-20 w-80 border-2 pb-1"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                        <Button nombre="Solicitar Ambulancia" />
                    </div>
                )}
            </form>
        </div>
    );
}

export default Formulario;
