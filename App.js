import React from 'react'
import {View} from 'react-native'
import BottomNavigator from './src/navigation/BottomNavigator'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store'

const App = () => {

  return(
    <Provider store={store}>
      <PaperProvider>
        <BottomNavigator/>
      </PaperProvider>
    </Provider>
  )
}

export default App