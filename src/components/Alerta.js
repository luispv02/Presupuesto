import React, {Fragment} from 'react';

const Alerta = ({alerta, mensaje}) => {
    return ( 
        <Fragment>
            {alerta ? <p className="error">{mensaje}</p> : null }
        </Fragment>
     );
}
 
export default Alerta;
