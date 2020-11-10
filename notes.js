//Store holds state in application
//Action describes what happens, or the intention, describes the change in state
//Reducer what ties the stores and actions together, the reducer accepts an action which tells it what to do, and connects to the store. Actually carries out the state change.

//State of our program is in a object tree managed by the store
//Only way to change the state is to send an action indirectly through a reducer
    //Actions are plain JS objects that have a type property to indicate the type of action being performed
    //Action cretors create an action, function that returns an action
const BUY_CAKE = 'BUY_CAKE'
function buyCake(){
    return {
        type: BUY_CAKE
    }
}
//Use pure reducers to change the state
    //Pure functions that take in a prevState, action and return the new state.
        //Pure function means given the same input it will provide the same output, produces no side effects

        const initialState = {
            numOfCakes: 10
        }
        const cakeReducer = (state = initialState, action) => {
            switch(action.type){
                case BUY_CAKE: return{
                    ...state,
                    numOfCakes: state.numOfCakes -1
                }
                default: return state
            }
        }
    //Store must be made, then provided to the app so it can dispatch actions and subscribe to (recognize and show) changes in the store. The createStore can only accept one reducer, so we must use combine reducer for multiple reducers being accepted into the store.
        //The following are put into the compnents
        //mapStateToProps, subscribes to changes in the store
        //mapDispatchToProps, allows app to dispatch actions as props
        //Then have to import connect to connect the component to the functions

    //Selectors help us abstract information from the mapStateToProps. The function would be called everytime the component is updated, which is a strain on resources expecially in larger apps.

//Payload is in the action, and holds the actual data.
        //in Our case, we used it to hold the iceCream data.

//Async Actions: Wait for a task to complete before dispatching an action. Like making an api call and waiting for the response then submitting an action based on the response.
        //In this app, we will fetch a list of users from api, stores in the store, and renders in the browser.
        //For standard storing data in state we have three properties as such

state = {
    loading: true, //for displaying spinner for loading
    data: [],
    error:''//error message in case api fails
}

    //For actions in async request, we have three actions, one for each scenario that could happend in our state: fetch request, fetch success, and fetch unsuccessful.

    //For reducers: we have three as well; request would have loading:true, success would have loading: false and user data , failure would have loading false and error:error(from api).

