import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'
import {buyCream} from '../redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick = {props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyCream())
return {
    buyItem: dispatchFunction
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)


//ownProps is the props of a component. Used so we can reuse and DRY out our components.
//If you do not want to subscribe to changes in the state, but still want to dispatch acitons, change in connect the first parameter to null.
