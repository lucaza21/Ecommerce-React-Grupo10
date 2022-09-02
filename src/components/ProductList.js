import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td>{props.urlImage? props.urlImage : props.image}</td>
                <td>{props.discount}</td>
                <td>{props.type}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;