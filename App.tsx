import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MeelsOverviewScreen } from './src/screens/MeelsOverviewScreen';
import { CategoriesScreen } from './src/screens/CategoriesScreen';

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
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MeelsOverviewScreen" component={MeelsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
