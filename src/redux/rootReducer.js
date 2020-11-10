import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './icecreams/icecreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

export default rootReducer