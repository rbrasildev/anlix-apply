import * as React from 'react';
import Routes from './src/routes';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




export default function App() {
  return (

    <PaperProvider>
      <GestureHandlerRootView>
        <Routes />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
