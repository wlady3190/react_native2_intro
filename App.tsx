import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Imagen from './components/Imagen';
import TabNavigator from './Navigators/BottomTab';

export default function App() {
  const edad = 123;

  function mensaje() {
    Alert.alert('Hola mundo')
    console.log('Por consola');
    
    
  }
  return (
    
    <TabNavigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
