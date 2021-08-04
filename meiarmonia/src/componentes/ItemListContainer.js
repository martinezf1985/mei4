



import React from 'react'
import PropTypes from 'prop-types'

 const ItemListContainer = props => {
    return (
        <div style = {{whidth:'150px', height:'150px',  }} >
            <p>{props.description}</p>
            <span>{props.user.name}</span>
            <span>{props.user.carrer}</span>
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer