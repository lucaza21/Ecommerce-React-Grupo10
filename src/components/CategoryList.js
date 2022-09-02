import React from 'react'

function CategoryList(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.viento}</td>
                <td>{props.cuerdas}</td>
                <td>{props.percusion}</td>
                <td>{props.electrico}</td>                
            </tr>
        </React.Fragment>
    )
}

export default CategoryList