
import React from 'react'
import PropTypes from 'prop-types'

const ItemListContainer = props => {
    return (
        <div>
             <h1> { props.greeting } </h1>
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer
