import React from 'react'
import {View} from 'react-native'
import BottomNavigator from './src/navigation/BottomNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {

  return(
    <Provider store={store}>
      <BottomNavigator/>
    </Provider>
  )
}

export default App