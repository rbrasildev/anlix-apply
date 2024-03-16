import * as React from 'react';
import Routes from './src/routes';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native-web';

export default function App() {
  return (

    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
