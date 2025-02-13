import React from 'react';

//grid para tarjetas
function Grid({children}) {
    return <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{children}</div>;
}

export default Grid;
