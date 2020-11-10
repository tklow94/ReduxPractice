import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <IceCreamContainer/>
    <ItemContainer cake/>
    <ItemContainer/>
    <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
