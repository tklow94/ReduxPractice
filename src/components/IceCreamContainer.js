import React from 'react'
import { connect } from 'react-redux'
import {buyCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>num of Icecream: {props.numOfIcecreams}</h2>
            <button onClick={props.buyCream}>Buy IceCream </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCream: () => dispatch(buyCream())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
