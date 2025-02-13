import React from 'react';
import {LuPhone} from 'react-icons/lu';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white py-2">
            <div className="flex w-full flex-col items-center justify-center space-y-6 px-4 sm:flex-col sm:items-center md:flex-row md:space-y-0">
                <div className="w-full text-center sm:text-center md:w-1/3">
                    <h3 className="mb-2 text-xl font-bold text-red-600">Emergencia Médica</h3>
                    <p className="text-gray-700">Brindamos atención médica de emergencia las 24 hs</p>
                    <p className="text-gray-700">los 7 días de la semana</p>
                </div>

                <div className="w-full text-center sm:text-center md:w-1/3">
                    <h3 className="mb-2 mt-0 text-xl font-bold text-red-600">Contacto de emergencias</h3>
                    <div className="flex items-center justify-center space-x-2">
                        <LuPhone className="h-6 w-6 text-red-600" />
                        <p className="text-gray-700">0800-333-111</p>
                    </div>
                </div>

                <div className="w-full text-center sm:text-center md:w-1/3">
                    <h3 className="mb-2 text-xl font-bold text-red-600">Información</h3>
                    <nav className="flex flex-col space-y-2 sm:items-center">
                        <Link to="/politicaPrivacidad" className="text-gray-700 transition-colors hover:text-red-600">
                            Políticas de Privacidad
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
