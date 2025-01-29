import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Boton from './Boton';
import {FiEye, FiEyeOff} from 'react-icons/fi';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            document.body.classList.add('no-navbar');
        } else {
            document.body.classList.remove('no-navbar');
        }
    }, [isLoading]);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/tabla/accidente');
        }, 6000);
    };

    return (
        <div className={`relative flex min-h-screen items-center justify-center bg-neutral-200 px-4 py-12 sm:px-6 lg:px-8 ${isLoading ? 'bg-white' : ''}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <span className="loader"></span>
                </div>
            )}
            {!isLoading && (
                <div className="w-full max-w-md space-y-8">
                    <div className="rounded-lg bg-white px-8 pb-8 pt-6 shadow-md">
                        <h2 className="mb-6 text-center text-3xl font-bold text-red-500">Iniciar sesión como empleado</h2>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin();
                            }}
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                    placeholder="ejemplo@correo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="w-full max-w-xs">
                                    <Boton
                                        nombre="Iniciar Sesión"
                                        className="flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogIn;
