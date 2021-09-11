import React,{Fragment} from 'react';

const Listado = ({gastoIndividual}) => {

    return ( 
        <Fragment>
            <ul>
                <li>{gastoIndividual.nombregasto}</li>
                <li>${gastoIndividual.preciogasto}</li>
            </ul>

        </Fragment>
     );
}
 
export default Listado;