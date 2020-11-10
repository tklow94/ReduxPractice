import React, {useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
    const [number, setNumber] = useState();
    return (
        <div>
            <h2>num of Cakes: {props.numOfCakes} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
