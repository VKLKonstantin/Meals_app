import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GridTemplate } from './src/screens/GridTemplate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MeelsOverview } from './src/screens/MeelsOverview';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#351401' },
          }}>
          <Stack.Screen name="MeelsCategory" component={GridTemplate} options={{
            title: 'All Categories'
          }} />
          <Stack.Screen name="MeelsOverview" component={MeelsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
